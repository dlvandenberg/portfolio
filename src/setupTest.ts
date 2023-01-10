import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('$env/static/private', () => {
	return {
		API_URL: 'http://localhost',
		API_TOKEN: 'vitest',
	};
});

// eslint-disable-next-line @typescript-eslint/no-empty-function
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
