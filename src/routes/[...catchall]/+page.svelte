<script lang="ts">
	import { Content, isPreviewing } from '@builder.io/sdk-svelte';
	import type { PageServerData } from './$types';
	import VeryLocalizedComponent from './VeryLocalizedComponent.svelte';
	import { VeryLocalizedComponentInfo } from './VeryLocalizedComponentInfo';
	import { PUBLIC_BUILDER_PUBLIC_API_KEY } from '$env/static/public';

	export let data: PageServerData;

	const customs = [
		{
			component: VeryLocalizedComponent,
			...VeryLocalizedComponentInfo
		}
	];
</script>

<main>
	<h2>start</h2>
	{#if data.content || isPreviewing()}
		<Content
			model="mateusz-test-page"
			content={data.content}
			apiKey={PUBLIC_BUILDER_PUBLIC_API_KEY}
			enrich={true}
			customComponents={customs}
		/>
	{:else}
		<p>Loading...</p>
	{/if}
	<h2>end</h2>
</main>
