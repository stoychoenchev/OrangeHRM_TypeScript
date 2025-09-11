import fs from 'fs';
import { request } from '@playwright/test';
import 'dotenv/config';

const ENV_PATH = './.env';

export async function getAccessTokenAndUpdateEnv(): Promise<string> {
  const requestContext = await request.newContext();
  const response = await requestContext.post(
    'http://localhost/orangehrm/orangehrm-5.7/web/index.php/oauth2/token',
    {
      form: {
        grant_type: 'refresh_token',
        client_id: process.env.OHRM_CLIENT_ID || 'c1d4eab866146e6b157d8b993907ae1b',
        refresh_token: process.env.OHRM_REFRESH_TOKEN || 'YOUR_REFRESH_TOKEN_HERE',
      },
    }
  );

  const data = await response.json();
  if (!response.ok()) {
    throw new Error(`Failed to get token: ${JSON.stringify(data)}`);
  }

  // Update .env file with new refresh token
  if (data.refresh_token) {
    let envContent = fs.readFileSync(ENV_PATH, 'utf-8');
    envContent = envContent.replace(
      /OHRM_REFRESH_TOKEN=.*/g,
      `OHRM_REFRESH_TOKEN=${data.refresh_token}`
    );
    fs.writeFileSync(ENV_PATH, envContent);
  }

  return data.access_token;
}