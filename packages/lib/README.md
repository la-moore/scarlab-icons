<p align="center"><a href="http://scarlab-icons.la-moore.ru" target="_blank" rel="noopener noreferrer"><img width="100" src="http://scarlab-icons.la-moore.ru/images/scarab-logo.png" alt="Scarlab logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@scarlab-icons/lib"><img src="https://img.shields.io/npm/v/@scarlab-icons/lib?color=%23cb0000" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/@scarlab-icons/lib"><img src="https://img.shields.io/npm/dm/@scarlab-icons/lib" alt="npm version"></a>
</p>

# Scarlab Icons
Scarlab Icons is a collection of more than 2800 simply, beautiful and open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency, and flexibility.

[scarlab-icons](http://scarlab-icons.la-moore.ru/)

## Quick Start
Start with this [CodePen Template](https://codepen.io/pen?template=GRMNEPL) to begin prototyping with Scarlab Icons in the browser.

Or copy and paste the following code snippet into a blank `html` file.

```html
<!DOCTYPE html>
<html lang="en">
<title></title>
<script src="https://unpkg.com/@scarlab-icons/lib"></script>
<body>

<!-- example icon -->
<i data-scarlab="circle"></i>

<script>
  ScarlabIcons.replace()
</script>
</body>
</html>
```

## Usage
At its core, Scarlab Icons is a collection of [SVG](https://svgontheweb.com/#svg) files.
This means that you can use Scarlab Icons in all the same ways you can use SVGs
(e.g. `img`, `background-image`, `inline`, `object`, `embed`, `iframe`).
Here's a helpful article detailing the many ways SVGs can be used
on the web: [SVG on the Web – Implementation Options](https://svgontheweb.com/#implementation)

The following are additional ways you can use Scarlab Icons.

## Client-side JavaScript

### 1. Include
Include `scarlab-icons.js` or `scarlab-icons.min.js` with a `<script>` tag:

```html
<script src="path/to/dist/scarlab-icons.js"></script>
```

> **Note:** `scarlab-icons.js` and `scarlab-icons.min.js` are located in the `dist` directory of the npm package.
Or load the script from a CDN provider:

```html
<!-- choose one -->
<script src="https://unpkg.com/@scarlab-icons/lib"></script>
<script src="https://cdn.jsdelivr.net/npm/@scarlab-icons/lib"></script>
```

After including the script, `scarlab` will be available as a global variable.

### 2. Use
To use an icon on your page, add a `data-scarlab` attribute with the icon name to an element:

```html
<i data-scarlab="circle"></i>
```

Or add a `src` attribute with the `~scarlab/` root and icon name to an image:

```html
<img src="~scarlab/circle" alt="" />
```

See the complete list of icons at [scarlab-icons](http://scarlab-icons.la-moore.ru).

### 3. Replace
Call the `ScarlabIcons.replace()` method:

```html
<script>
  ScarlabIcons.replace()
</script>
```

All elements that have a `data-scarlab` or `[src^="~scarlab"]` attribute will be replaced with
SVG markup corresponding.

## Figma
Scarlab Icons is available as a [Figma component library](https://www.figma.com/community/file/1051907827478622063/Scarab-Icons). To use the components, log in to your Figma account and duplicate the file to your drafts.

Or you can use Scarlab Icons as a [Figma plugin](https://www.figma.com/community/plugin/1053846082213772972/Scarlab-Icons)


## License
Scarlab Icons is licensed under the [MIT License](https://github.com/la-moore/scarlab-icons/blob/master/LICENSE).
