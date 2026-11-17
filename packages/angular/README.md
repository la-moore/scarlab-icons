<p align="center"><a href="https://scarlab-icons.la-moore.ru" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/la-moore/scarlab-icons/master/.github/logo.svg" alt="Scarlab logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scarlab-icons/angular"><img src="https://img.shields.io/npm/v/@scarlab-icons/angular?color=%23cb0000" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scarlab-icons/angular"><img src="https://img.shields.io/npm/dm/@scarlab-icons/angular" alt="npm version"></a>
</p>

# [Scarlab Icons](http://scarlab-icons.la-moore.ru/)
Scarlab Icons is a collection of more than 1400 simple, beautiful and open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

```shell
npm install @scarlab-icons/angular
```

### Include
```typescript
import { SolidSquare, SolidCircle } from '@scarlab-icons/angular/solid'
import CircleIcon from '@scarlab-icons/angular/outline/circle'
```

### Use

```typescript
import { Component } from '@angular/core'
import { OutlineCircle } from '@scarlab-icons/angular/outline'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [OutlineCircle],
  template: `
    <scarlab-icon-outline-circle
        [width]="'32'"
        [height]="'32'"
        [strokeWidth]="'3'"
        [style]="'color: #ff6800;'"
    />
  `
})
export class AppComponent {}
```

### Accessibility
Icons are decorative by default and rendered with `aria-hidden="true"`. Pass `ariaLabel` to give an icon an accessible name — `aria-hidden` is then removed:

```html
<scarlab-icon-outline-heart ariaLabel="Like" />
```

## Figma
Scarlab Icons is available as a [Figma component library](https://www.figma.com/community/file/1051907827478622063/Scarab-Icons). To use the components, log in to your Figma account and duplicate the file to your drafts.

Or you can use Scarlab Icons as a [Figma plugin](https://www.figma.com/community/plugin/1053846082213772972/Scarlab-Icons)


## License
Scarlab Icons is licensed under the [MIT License](https://github.com/la-moore/scarlab-icons/blob/master/LICENSE)..
