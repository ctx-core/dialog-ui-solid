import { createMemo } from 'solid-js'
import { Style_ } from '@ctx-core/ui-solid'
import { isServer } from 'solid-js/web'
import { id__bind_dom_ } from '@ctx-core/dom'
/** @typedef {import('@ctx-core/dom').arg1__bind_dom_T}arg1__bind_dom_T */
/** @typedef {import('solid-js').JSX}JSX */
/** @typedef {import('solid-js').Signal}Signal */
/**
 * @param $p{import('./index.d.ts').CloseDialogHandle__props_T}
 * @returns {JSX.Element[]}
 */
export function CloseDialogHandle($p) {
	const tabindex_ = createMemo(()=>$p.tabindex || '0')
	/** @type {JSX.Element[]} */
	return [
		/** @type {JSX.Element} */<Style/>,
		/** @type {JSX.Element} */<a
			ref={$=>{
				queueMicrotask(()=>
					CloseDialogHandle__bind_dom($))
			}}
			data-bind_dom={CloseDialogHandle__bind_dom.name}
			href="."
			class={`close CloseDialogHandle ${$p.class || ''}`}
			tabindex={tabindex_()}
			onclick={$=>{
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
/** @type {arg1__bind_dom_T<HTMLElement, 'CloseDialogHandle__bind_dom'>} */
export const CloseDialogHandle__bind_dom = id__bind_dom_(
	'CloseDialogHandle__bind_dom',
	CloseDialogHandle=>{
		if (isServer) return
		CloseDialogHandle.addEventListener('click',
			evt=>evt.preventDefault())
	})
