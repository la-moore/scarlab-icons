import DEFAULT_ATTRS from '../../dist/attributes.json'

class Icon {
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
			// ...{
			// 	class: classnames(this.attrs.class, attrs.class)
			// },
		}
	}

	toSvg(attrs, beauty) {
		return `<svg ${beauty ? '\n\t' : ''}${attrsToString(this.getAttributes(attrs), beauty)}${beauty ? '\n' : ''}>${beauty ? '\n\t' : ''}${this.getContent(beauty)}${beauty ? '\n' : ''}</svg>`
	}
}

function attrsToString(attrs, beauty) {
	return Object.keys(attrs)
		.map(key => `${key}="${attrs[key]}"`)
		.join(beauty ? '\n\t' : ' ');
}

export default Icon
