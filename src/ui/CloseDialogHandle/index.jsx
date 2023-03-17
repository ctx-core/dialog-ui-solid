import { id__dom__handler_ } from '@ctx-core/dom'
import { Style_ } from '@ctx-core/ui-solid'
import { createMemo } from 'solid-js'
import { isServer } from 'solid-js/web'
/** @typedef {import('@ctx-core/dom').arg1__id__dom__handler_T}arg1__id__dom__bind_T */
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
					CloseDialogHandle__onbind($))
			}}
			data-onbind={CloseDialogHandle__onbind.id}
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
/** @type {arg1__id__dom__bind_T<HTMLElement, 'CloseDialogHandle__onbind'>} */
export const CloseDialogHandle__onbind = id__dom__handler_(
	'CloseDialogHandle__onbind',
	CloseDialogHandle=>{
		if (isServer) return
		CloseDialogHandle.addEventListener('click',
			evt=>evt.preventDefault())
	})
export {
	CloseDialogHandle__onbind as CloseDialogHandle__bind_dom,
}
