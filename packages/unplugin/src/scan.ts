// Места, где в коде задаётся имя иконки
const TRIGGER = /data-scarlab\b|dataset\.scarlab\b|dataset\[\s*['"]scarlab['"]\s*\]/g

// Строковый литерал, похожий на имя иконки: 'heart', "arrow-up-lg", `bell`
const LITERAL = /(["'`])([a-z0-9]+(?:-[a-z0-9]+)*)\1/g

// Атрибут без кавычек: data-scarlab=heart
const UNQUOTED = /^\s*=\s*([a-z0-9]+(?:-[a-z0-9]+)*)/

// Сколько символов после триггера просматривать. Окно обрывается раньше
// на переводе строки, `;` или `>` (но не `=>`), чтобы не захватывать чужие строки.
const WINDOW = 200
const WINDOW_END = /[\n;]|(?<!=)>/

/**
 * Находит в коде имена иконок рядом с data-scarlab / dataset.scarlab.
 * В результат попадают только известные имена (known), так что лишние литералы
 * в окне (классы, data-style и т.п.) отсеиваются, а случайное совпадение
 * стоит лишь нескольких килобайт.
 */
export function scanCode(code: string, known: ReadonlySet<string>, found: Set<string> = new Set()): Set<string> {
    for (const match of code.matchAll(TRIGGER)) {
        const start = match.index + match[0].length
        let chunk = code.slice(start, start + WINDOW)
        const end = chunk.search(WINDOW_END)

        if (end !== -1) chunk = chunk.slice(0, end)

        const candidates = [...chunk.matchAll(LITERAL)].map((m) => m[2])
        const unquoted = UNQUOTED.exec(chunk)?.[1]

        if (unquoted) candidates.push(unquoted)

        for (const name of candidates) {
            if (known.has(name)) found.add(name)
        }
    }

    return found
}
