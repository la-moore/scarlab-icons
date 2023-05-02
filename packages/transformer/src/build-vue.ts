import { compile } from '@vue/compiler-dom';

export async function TransformToVue(htmlString: string) {
    const { code } = compile(htmlString, {
        mode: 'module',
    });

    return code
        .replace('ctx: ""', '..._ctx')
        .replace('export', 'export default');
}
