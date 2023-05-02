import { transform } from '@svgr/core'
import jsx from '@svgr/plugin-jsx'

export async function TransformToReact(htmlString: string) {
    return await transform(htmlString, { plugins: [jsx] })
}
