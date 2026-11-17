<p align="center"><a href="https://scarlab-icons.la-moore.ru" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/la-moore/scarlab-icons/master/.github/logo.svg" alt="Scarlab logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scarlab-icons/unplugin"><img src="https://img.shields.io/npm/v/@scarlab-icons/unplugin?color=%23cb0000" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scarlab-icons/unplugin"><img src="https://img.shields.io/npm/dm/@scarlab-icons/unplugin" alt="npm version"></a>
</p>

# [Scarlab Icons](http://scarlab-icons.la-moore.ru/)
Scarlab Icons is a collection of more than 1400 simple, beautiful and open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.
# [Scarlab Icons](http://scarlab-icons.la-moore.ru/): build plugin

`replace()` from `@scarlab-icons/js` ships every icon (~2.5 MB) because it only learns icon names at runtime. This plugin scans your project at build time and gives `@scarlab-icons/js` only the icons you actually use. Your code does not change.

It also replaces static `data-scarlab` placeholders in `index.html` with inline `<svg>` (Vite), so those icons render without JavaScript and without a flash.

```shell
npm install -D @scarlab-icons/unplugin
```

### Vite

```js
// vite.config.js
import scarlab from '@scarlab-icons/unplugin/vite'

export default {
  plugins: [scarlab()]
}
```

### Rollup

```js
// rollup.config.js
import scarlab from '@scarlab-icons/unplugin/rollup'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  plugins: [scarlab(), nodeResolve()]
}
```

Your code stays the same:

```js
import { replace } from '@scarlab-icons/js'

replace()
```

### How icons are found

The plugin reads project files (`html`, `js`, `ts`, `jsx`, `tsx`, `vue`, `svelte`, `astro`, `md`, `mdx` and common template formats; `node_modules`, `dist` and `build` are skipped) and picks up string literals next to `data-scarlab` / `dataset.scarlab`:

```html
<i data-scarlab="heart"></i>
```

```js
el.innerHTML = `<i data-scarlab="${liked ? 'heart' : 'heart-broken'}"></i>` // both found
el.dataset.scarlab = 'bell'                                                    // found
el.setAttribute('data-scarlab', 'star')                                        // found
el.dataset.scarlab = item.icon                                                 // NOT found: use safelist
```

Every style of a found icon is included, so `data-style` can be anything.

Names computed at runtime can't be detected. Add them to `safelist`. If an icon is missing at runtime, `replace()` logs a `console.warn`.

In `vite dev` the full set is served, so there is nothing to rescan when you edit files.

### Options

```ts
scarlab({
  // icons to always include: 'heart' or 'style/name'
  safelist: ['heart', 'outline/star'],
  // glob patterns to scan, relative to root
  content: ['src/**/*.{html,ts,vue}'],
  // extra glob patterns to skip
  ignore: ['src/legacy/**'],
  // project root, defaults to Vite root or process.cwd()
  root: process.cwd(),
  // Vite: inline static icons in index.html (default true); an object sets default attributes
  inline: { strokeWidth: 1.5 },
})
```

The plugin is ESM-only and requires Node.js 20.19+.

## License
Scarlab Icons is licensed under the [MIT License](https://github.com/la-moore/scarlab-icons/blob/master/LICENSE).
