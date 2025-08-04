// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

declare module '@iconify/svelte' {
	import { SvelteComponentTyped } from 'svelte';
	
	interface IconProps {
		icon?: string;
		width?: string | number;
		height?: string | number;
		class?: string;
		style?: string;
		[key: string]: any;
	}
	
	export default class Icon extends SvelteComponentTyped<IconProps> {}
}

export {};
