import { PUBLIC_BUILDER_PUBLIC_API_KEY } from '$env/static/public';
import { fetchOneEntry } from '@builder.io/sdk-svelte';
import type { ServerLoad } from '@sveltejs/kit';

export const load: ServerLoad = async ({ url }) => {
	const urlPath = url.pathname;

	const content = await fetchOneEntry({
		model: 'mateusz-test-page',
		apiKey: PUBLIC_BUILDER_PUBLIC_API_KEY,
		userAttributes: {
			urlPath
		},
		includeUnpublished: true
	});

	return {
		content
	};
};
