import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'yarn run build && yarn run preview',
		port: 4173,
	},
	testDir: 'tests',
	testMatch: 'specs/**/*.{spec,test}.{js,ts}',
	use: {
		trace: 'retain-on-failure',
		video: 'retain-on-failure',
	},
	projects: [{ name: 'chromium', use: devices['Desktop Chrome'] }],
};

export default config;
