import { createMemo } from 'solid-js'
import { Style_ } from '@ctx-core/ui-solid'
/**
 * @param $p{import('./index.d.ts').CloseDialogHandle__props_T}
 * @returns {import('solid-js').JSX.Element[]}
 */
export function CloseDialogHandle($p) {
	const tabindex_ = createMemo(()=>$p.tabindex || '0')
	return [
		<Style/>,
		<a
			href="."
			class={`close CloseDialogHandle ${$p.class || ''}`}
			tabindex={tabindex_()}
			onclick={$=>{
				$.preventDefault()
				if ($p.onclick) $p.onclick($)
			}}
		>{$p.children || '✖'}</a>
	]
}
//language=CSS
const Style = Style_(()=>`
	.CloseDialogHandle {
		text-decoration: none;
	}
`)
