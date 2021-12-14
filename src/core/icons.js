import Icon from './icon'
import tags from '../../dist/tags.json'

const result = []

function convertIcons(icons) {
	icons.forEach((icon) => {
		result.push(
			new Icon(icon.name, icon.type, icon.paths, tags[icon.name])
		)
	})

	return result
}

export default convertIcons
