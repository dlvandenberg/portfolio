import { ENDPOINT_TOKEN } from '$env/static/private';

export const request = async (fetchFn: typeof fetch, url: RequestInfo | URL) => {
	return fetchFn(url, { headers: new Headers({ Authorization: `Bearer ${ENDPOINT_TOKEN}` }) });
};
