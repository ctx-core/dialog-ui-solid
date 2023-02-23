import type { Component, JSX, ParentProps, VoidProps } from 'solid-js'
export function ModalDialog($_p:ModalDialog__props_T):JSX.Element
export type ModalDialog__props_T = ParentProps<{
	title:string
	ref?:($:HTMLDivElement)=>void
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
