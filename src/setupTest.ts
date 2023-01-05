import '@testing-library/jest-dom';
import { vi } from 'vitest';

vi.mock('$env/static/private', () => {
	return {
		API_URL: 'http://localhost',
		API_TOKEN: 'vitest',
	};
});
