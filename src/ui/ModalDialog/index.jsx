import { id__dom__handler_ } from '@ctx-core/dom'
import { noop } from '@ctx-core/function'
import { atom_ } from '@ctx-core/nanostores'
import { be_ } from '@ctx-core/object'
import { Style_ } from '@ctx-core/ui-solid'
import { createMemo, mergeProps, } from 'solid-js'
import { isServer } from 'solid-js/web'
import { CloseDialogHandle } from '../CloseDialogHandle/index.jsx'
/** @typedef {import('@ctx-core/dom').arg2__id__dom__handler_T}arg2__id__dom__bind_T */
/** @typedef {import('@ctx-core/nanostores').WritableAtom_}WritableAtom_ */
/** @typedef {import('@ctx-core/object').Be}Be */
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
/** @typedef {import('solid-js').Signal}Signal */
/** @typedef {import('./index.d.ts').ModalDialog__props_T}ModalDialog__props_T */
/**
 * @param {ModalDialog__props_T}$_p
 * @returns {JSX.Element[]}
 * @constructor
 */
export function ModalDialog($_p) {
	const $p = mergeProps({
		class: '',
		width: '50rem',
		height: '50rem',
		full__max_width: '1215px',
		header__border_bottom: `1px solid #96ADB8`,
	}, $_p)
	const onclose_ = createMemo(()=>$p.onclose || $p.onClose || noop)
	/**
	 * @param event{KeyboardEvent}
	 */
	return [
		<ModalDialogStyle
			width={$p.width}
			height={$p.height}
			full__max_width={$p.full__max_width}
			header__border_bottom={$p.header__border_bottom}
		/>,
		<div
			ref={$=>{
				if ($p.ref__set) $p.ref__set($)
				queueMicrotask(()=>
					ModalDialog__onbind($))
			}}
			data-onbind={ModalDialog__onbind.id}
			class={`ModalDialog dialog-content ${$p.class}`}
			on:close={$=>onclose_()()}
		>
			<div class="header">
				<div>{$p.title}</div>
				<CloseDialogHandle/>
			</div>
			<div class="body">
				{$p.children}
			</div>
		</div>
	]
}
// language=CSS
const ModalDialogStyle = /** @type {import('./index.d.ts').ModalDialogStyle_T} */ Style_($p=>`
	.ModalDialog {
		display: none;
		position: fixed;
		flex-direction: column;
		top: 50%;
		left: 50%;
		margin-top: calc(-.5 * ${$p.height});
		margin-left: calc(-.5 * ${$p.width});
		max-height: ${$p.height};
		width: ${$p.width};
		overflow: auto;
		border: 1px solid black;
		background: white;
		box-shadow: -1px 0 40px 0 rgba(0, 0, 0, 0.6);
		z-index: 104;
	}
	@media screen and (max-width: ${$p.full__max_width}) {
		.ModalDialog {
			height: 100vh;
			margin-top: -50vh;
			width: 100vw;
			margin-left: -50vw;
		}
	}
	@media screen and (max-height: 50rem) {
		.ModalDialog {
			height: 100vh;
			margin-top: -50vh;
		}
	}
	.ModalDialog.open {
		display: flex;
	}
	.ModalDialog > .header {
		flex: 0;
		display: flex;
		border-bottom: ${$p.header__border_bottom};
		height: 3.2rem;
		padding: 1rem;
	}
	.ModalDialog > .header > div, .ModalDialog > .header > a {
		display: flex;
		align-items: center;
		margin: 0;
	}
	.ModalDialog > .header > div {
		flex: 1;
	}
	.ModalDialog > .header .close {
		flex-grow: 0;
		margin-right: 0.4rem;
	}
	.ModalDialog > .body {
		flex: 1;
		display: flex;
		flex-direction: column;
		position: relative;
		overflow: hidden;
	}
`)
/** @type {arg2__id__dom__bind_T<HTMLElement, 'ModalDialog__onbind'>} */
export const ModalDialog__onbind = id__dom__handler_(
	'ModalDialog__onbind',
	(ModalDialog, ctx)=>{
		if (isServer) return
		ModalDialog
			.querySelector('.CloseDialogHandle')
			.addEventListener('click', evt=>{
				evt.preventDefault()
				ModalDialog__close(ctx)
			})
	})
export {
	ModalDialog__onbind as ModalDialog__bind_dom,
}
/**
 * @param {Ctx}ctx
 * @param {HTMLElement}ModalDialog
 * @returns {number|null}
 * @constructor
 */
export function ModalDialog__open(ctx, ModalDialog) {
	ModalDialog__bind_window(ctx)
	const ModalDialog__stack = ModalDialog__stack_(ctx)
	if (~ModalDialog__stack.indexOf(Element)) return null
	ModalDialog.classList.add('open')
	return ModalDialog__stack.push(ModalDialog)
}
/**
 * @param {Ctx}ctx
 * @param {HTMLElement}[ModalDialog]
 */
export function ModalDialog__close(ctx, ModalDialog) {
	const ModalDialog__stack = ModalDialog__stack_(ctx)
	if (!ModalDialog) ModalDialog = ModalDialog__stack[0]
	if (ModalDialog) {
		ModalDialog__stack.splice(ModalDialog__stack.indexOf(ModalDialog), 1)
		ModalDialog.classList.remove('open')
		const event = new Event('close')
		ModalDialog.dispatchEvent(event)
	}
	if (!ModalDialog__stack.length) {
		ModalDialog__unbind_window(ctx)
	}
	return ModalDialog
}
/**
 * @param {Ctx}ctx
 * @private
 */
function ModalDialog__bind_window(ctx) {
	if (isServer) return
	ModalDialog__unbind_window(ctx)
	window.addEventListener('keydown', ModalDialog__window__onkeydown_(ctx))
}
/**
 * @param {Ctx}ctx
 * @private
 */
function ModalDialog__unbind_window(ctx) {
	if (isServer) return
	window.removeEventListener('keydown', ModalDialog__window__onkeydown_(ctx))
}
/** @type {Be<(event:MouseEvent)=>void>} */
const ModalDialog__window__onkeydown_ = be_(
	'ModalDialog__window__onkeydown_',
	ctx=>
		evt=>{
			const { key } = evt
			if (key === 'Escape') {
				ModalDialog__close(ctx)
			}
		})
/**
 * @param {Ctx}ctx
 * @param {HTMLElement}ModalDialog
 * @returns number|null
 */
/**
 * @param {Ctx}ctx
 * @private
 */
function ModalDialog__stack_(ctx) {
	return ModalDialog__stack__(ctx).$
}
/**
 * @param $_p{ModalDialog__props_T}
 * @return {JSX.Element[]}
 * @private
 */
const ModalDialog__stack__ = be_('ModalDialog__stack__', ()=>
	atom_([]))
