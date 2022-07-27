const DEFAULT_ATTRS = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "none",
}

function serializeObjToAttrs(obj: any) {
  return Object.keys(obj)
    .map(key => `${key}="${obj[key]}"`)
    .join(' ')
}

const template = (paths: any[], attrs: any) => `
<svg ${serializeObjToAttrs({ ...DEFAULT_ATTRS, ...attrs })}>
    ${ paths.map(attrs => `<path ${serializeObjToAttrs(attrs)} />`).join('\n\t') }
</svg>
`

class Icon {
  name = undefined
  type = undefined
  paths = undefined
  tags = undefined

  constructor(name, type, paths, tags = []) {
    this.name = name
    this.type = type
    this.paths = paths
    this.tags = tags
  }

  getContent(beauty) {
    return this.paths.map((path) => {
      return `<path d="${path}"></path>`
    }).join(beauty ? '\n\t' : '')
  }

  getAttributes(attrs = {}) {
    return {
      ...DEFAULT_ATTRS[this.type],
      ...{ class: `scarlab scarlab-${this.name}` },
      ...attrs,
    }
  }

  toSvg(attrs, beauty) {
    return template(this.paths, attrs)
  }
}

function attrsToString(attrs, beauty) {
  return Object.keys(attrs)
    .map(key => `${key}="${attrs[key]}"`)
    .join(beauty ? '\n\t' : ' ')
}

export default Icon
