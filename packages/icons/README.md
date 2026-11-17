<p align="center"><a href="https://scarlab-icons.la-moore.ru" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/la-moore/scarlab-icons/master/.github/logo.svg" alt="Scarlab logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scarlab-icons/icons"><img src="https://img.shields.io/npm/v/@scarlab-icons/icons?color=%23cb0000" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scarlab-icons/icons"><img src="https://img.shields.io/npm/dm/@scarlab-icons/icons" alt="npm version"></a>
</p>

# [Scarlab Icons](http://scarlab-icons.la-moore.ru/)
Scarlab Icons is a collection of more than 1400 simple, beautiful and open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

```shell
npm install @scarlab-icons/icons
```

### Include
```ts
import { icons, type IconNode, type IconStyle, type Icon } from '@scarlab-icons/icons'
```

The package also ships optimized SVG files: `@scarlab-icons/icons/{base,ghost,outline,solid}/<name>.svg`.

### Data
`icons` is an array of `IconNode`:

```ts
interface IconNode {
    name: string        // 'heart'
    style: IconStyle    // 'base' | 'ghost' | 'outline' | 'solid'
    content: string     // ready-to-use SVG markup
    svg: SvgNode        // parsed SVG tree: { name, type, value, attributes, children }
}
```

Icon names are available as types: `BaseIconName`, `GhostIconName`, `OutlineIconName`, `SolidIconName`, and `Icon` for the full `style/name` form.

### Use
```ts
import { icons, type Icon } from '@scarlab-icons/icons'

function getIcon(id: Icon) {
    const [style, name] = id.split('/')
    return icons.find((icon) => icon.style === style && icon.name === name)
}

document.body.insertAdjacentHTML('beforeend', getIcon('outline/heart')!.content)
```

For rendering in the browser or with custom attributes, see [`@scarlab-icons/js`](https://www.npmjs.com/package/@scarlab-icons/js) and the framework packages (`react`, `vue`, `svelte`, `angular`).

## Figma
Scarlab Icons is available as a [Figma component library](https://www.figma.com/community/file/1051907827478622063/Scarab-Icons). To use the components, log in to your Figma account and duplicate the file to your drafts.

Or you can use Scarlab Icons as a [Figma plugin](https://www.figma.com/community/plugin/1053846082213772972/Scarlab-Icons)


## License
Scarlab Icons is licensed under the [MIT License](https://github.com/la-moore/scarlab-icons/blob/master/LICENSE).