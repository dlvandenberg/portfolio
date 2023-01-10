import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn run build && yarn run preview',
		port: 4173,
	},
	testDir: 'tests',
	use: {
		trace: 'on',
	},
};

export default config;
