import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 2 : 1,

  // Only add workers when in CI to avoid `undefined` type issue
  ...(process.env.CI ? { workers: 1 } : {}),

  reporter: [
    ['html', { open: 'never' }],
    ['allure-playwright'],
  ],

  use: {
    trace: 'retain-on-failure',     // Collect trace only for failed tests
    screenshot: 'only-on-failure',  // Take screenshots only when a test fails
    video: 'retain-on-failure',     // Record video only for failed tests
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        locale: 'en-US',
      },
    },
    // Uncomment to enable more browsers:
    /*
    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
        locale: 'en-US',
        firefoxUserPrefs: {
          'intl.accept_languages': 'en-US,en',
        },
        launchOptions: {
          args: ['-lang', 'en-US'],
        },
      },
    },
    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
        locale: 'en-US',
      },
    },
    */
  ],
});
