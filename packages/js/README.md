<p align="center"><a href="https://scarlab-icons.la-moore.ru" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/la-moore/scarlab-icons/master/.github/logo.svg" alt="Scarlab logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scarlab-icons/js"><img src="https://img.shields.io/npm/v/@scarlab-icons/js?color=%23cb0000" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scarlab-icons/js"><img src="https://img.shields.io/npm/dm/@scarlab-icons/js" alt="npm version"></a>
</p>

# [Scarlab Icons](http://scarlab-icons.la-moore.ru/)
Scarlab Icons is a collection of more than 1400 simple, beautiful and open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

[scarlab-icons](http://scarlab-icons.la-moore.ru/)

```shell
npm install @scarlab-icons/js
```

### Include
```js
import { replace } from '@scarlab-icons/js'
```

### Use

```html
<!-- HTML elements with data attributes -->
<div data-scarlab="activity" data-style="base" class="icon"></div>
<div data-scarlab="heart" data-style="ghost" stroke="red"></div>
<div data-scarlab="star" data-style="outline" data-stroke-width="3"></div>
```

```js
// Auto-replace elements with data-scarlab attribute
replace({
  stroke: 'currentColor',
  strokeWidth: 2
})
```

> `replace()` includes every icon (~2.5 MB). Add [`@scarlab-icons/unplugin`](https://github.com/la-moore/scarlab-icons/tree/master/packages/unplugin) to your Vite or Rollup config and only the icons you use end up in the bundle, with no code changes.

### Data Attributes

- `data-scarlab` - Icon name (required)
- `data-style` - Icon style: `base`, `ghost`, `outline`, `solid` (optional, default: `base`)
- `data-stroke-width` - Stroke width for non-solid icons (optional, default: `2`)

### Custom Attributes

Any other HTML attributes will be passed through to the generated SVG element:

```html
<div data-scarlab="activity" 
     data-style="base" 
     class="custom-icon" 
     width="32" 
     height="32" 
     stroke="#ff6800">
</div>
```

### Accessibility
Icons are decorative by default and rendered with `aria-hidden="true"`. Add `aria-label` (or `aria-labelledby`) to give an icon an accessible name — `aria-hidden` is then omitted:

```html
<div data-scarlab="heart" aria-label="Like"></div>
```

### API

```js
import { getIcon, toSvg } from '@scarlab-icons/js'

const icon = getIcon('heart', 'outline') // IconNode | undefined, style defaults to 'base'
const svg = toSvg(icon, { width: 32, strokeWidth: 3, class: 'my-icon' })
```

`toSvg` converts camelCase names to kebab-case (`strokeWidth` → `stroke-width`), escapes values and skips `null`, `undefined` and `false`.

## Figma
Scarlab Icons is available as a [Figma component library](https://www.figma.com/community/file/1051907827478622063/Scarab-Icons). To use the components, log in to your Figma account and duplicate the file to your drafts.

Or you can use Scarlab Icons as a [Figma plugin](https://www.figma.com/community/plugin/1053846082213772972/Scarlab-Icons)


## License
Scarlab Icons is licensed under the [MIT License](https://github.com/la-moore/scarlab-icons/blob/master/LICENSE)..
