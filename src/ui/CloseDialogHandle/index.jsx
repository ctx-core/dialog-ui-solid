import { createComputed, createMemo, createSignal } from 'solid-js'
import { Style_ } from '@ctx-core/ui-solid'
import { isServer } from 'solid-js/web'
/** @typedef {import('solid-js').JSX}JSX */
/** @typedef {import('solid-js').Signal}Signal */
/**
 * @param $p{import('./index.d.ts').CloseDialogHandle__props_T}
 * @returns {JSX.Element[]}
 */
export function CloseDialogHandle($p) {
	/** @type {Signal<HTMLElement>} */
	const [ref_, ref__set] =
		createSignal()
	const tabindex_ = createMemo(()=>$p.tabindex || '0')
	createComputed(()=>{
		if (ref_()) {
			CloseDialogHandle__bind_dom([ref_()])
		}
	})
	/** @type {JSX.Element[]} */
	return [
		/** @type {JSX.Element} */<Style/>,
		/** @type {JSX.Element} */<a
			ref={$=>ref__set($)}
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
/**
 * @param {HTMLElement[]}[CloseDialogHandle__el_a]
 */
export function CloseDialogHandle__bind_dom(CloseDialogHandle__el_a) {
	if (isServer) return
	if (!CloseDialogHandle__el_a) CloseDialogHandle__el_a = Array.from(document.querySelectorAll('.CloseDialogHandle'))
	for (const CloseDialogHandle__el of CloseDialogHandle__el_a) {
		CloseDialogHandle__el.addEventListener('click',
			evt=>evt.preventDefault())
	}
}
