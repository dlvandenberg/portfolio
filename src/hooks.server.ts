import { API_TOKEN, API_URL, ENDPOINT_TOKEN } from '$env/static/private';
import type { Handle, HandleFetch } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/api')) {
		const token = event.request.headers.get('token');
		if (token !== ENDPOINT_TOKEN) {
			console.log('Request NOT allowed');
			return new Response('Forbidden', { status: 403, statusText: 'Forbidden' });
		}
	}

	return await resolve(event);
}) satisfies Handle;

export const handleFetch = (async ({ fetch, request }) => {
	if (request.url.startsWith(API_URL)) {
		request.headers.set('Authorization', `Bearer ${API_TOKEN}`);
	}

	return fetch(request);
}) satisfies HandleFetch;
