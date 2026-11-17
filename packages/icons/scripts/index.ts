import { getIcons } from './build.ts'
import { buildSvgFiles } from './build-icons.ts'
import { buildIndex } from './build-js.ts'

// иконки парсятся и оптимизируются один раз, а затем пишутся во все форматы
const icons = await getIcons()

await Promise.all([buildSvgFiles(icons), buildIndex(icons)])
