import { toSvelte } from 'svg-to-svelte';

export async function TransformToSvelte(htmlString: string) {
    return toSvelte(htmlString).template;
}
