import type { arg2__id__dom__handler_T } from '@ctx-core/dom'
import type { Ctx } from '@ctx-core/object'
import type { Component, JSX, ParentProps, VoidProps } from 'solid-js'
export function ModalDialog($_p:ModalDialog__props_T):JSX.Element
export declare const ModalDialog__onbind: arg2__id__dom__handler_T<
	HTMLElement,
	'ModalDialog__onbind'
>
export declare function ModalDialog__open(ctx:Ctx, ModalDialog:HTMLElement):number|null
export declare function ModalDialog__close(ctx:Ctx, ModalDialog?:HTMLElement):HTMLElement|undefined
export type ModalDialog__props_T = ParentProps<{
	title:string
	ctx?:Ctx
	ref__set?:($:HTMLDivElement)=>void
	onclose?:()=>void
	onClose?:()=>void
	class?:string
	width:string
	height:string
	full__max_width?:string
	header__border_bottom?:string
}&({onclose:()=>void}|{onClose:()=>void})>
export type ModalDialogStyle__props_T = VoidProps<{
	width:string
	height:string
	full__max_width:string
	header__border_bottom:string
}>
export type ModalDialogStyle_T = Component<ModalDialogStyle__props_T>
