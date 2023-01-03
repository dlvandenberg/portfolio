import { API_TOKEN, API_URL } from '$env/static/private';

export const fetchRequest = async (request: URL | RequestInfo): Promise<Response> => {
	const headers = new Headers({
		Authorization: `Bearer ${API_TOKEN}`,
	});
	const method = 'GET';
	return fetch(request, { method, headers });
};

export const createUrl = (endpoint: string, searchParams?: { [key: string]: string }): URL => {
	const url = new URL(endpoint, API_URL);
	if (searchParams) {
		Object.keys(searchParams).forEach((key) => {
			url.searchParams.set(key, searchParams[key]);
		});
	}
	return url;
};

export const extractSearchParams = (searchParams: URLSearchParams): { [key: string]: string } => {
	return Array.from(searchParams).reduce(
		(acc: { [key: string]: string }, [param, value]: [string, string]) => {
			acc[param] = value;
			return acc;
		},
		{},
	);
};
