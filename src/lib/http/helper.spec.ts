import { API_URL } from '$env/static/private';
import { describe, expect, it } from 'vitest';
import { createUrl, extractSearchParams } from './helper';

describe('HTTP Helpers', () => {
	it('should create an url for an endpoint', () => {
		const endpoint = '/api/vitest';
		const url = createUrl(endpoint);
		expect(url.href).toEqual(`${API_URL}${endpoint}`);
		expect(url.pathname).toEqual('/api/vitest');
	});

	it('should create an url for an endpoint with searchparams', () => {
		const endpoint = '/api/search-params';
		const params = {
			param: 'vitest',
			search: 'Unit',
		};
		const url = createUrl(endpoint, params);
		expect(url.searchParams.get('param')).toEqual('vitest');
		expect(url.searchParams.get('search')).toEqual('Unit');
	});

	it('should extract an Object with search params from URLSearchParams', () => {
		const searchParams = new URLSearchParams({
			unit: 'Test',
			lib: 'vitest',
		});
		const paramObject = extractSearchParams(searchParams);
		expect(paramObject).toEqual({
			unit: 'Test',
			lib: 'vitest',
		});
	});

	it('should extract an empty Object from empty URLSearchParams', () => {
		it('should extract an Object with search params from URLSearchParams', () => {
			const searchParams = new URLSearchParams({});
			const paramObject = extractSearchParams(searchParams);
			expect(paramObject).toEqual({});
		});
	});
});
