import { ENDPOINT_TOKEN } from '$env/static/private';
import type { Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
	console.log(`Request to: ${event.url.pathname}`);

	if (event.url.pathname.startsWith('/api')) {
		const token = event.request.headers.get('token');
		if (token === ENDPOINT_TOKEN) {
			console.log('Request is allowed');
		} else {
			console.log('Request is NOT allowed');
		}
	}

	const response = await resolve(event);
	response.headers.append('Access-Control-Allow-Origin', 'http://localhost');
	return response;
}) satisfies Handle;
