import fs from 'fs';
import path from 'path';
import { request } from '@playwright/test';

const TOKEN_FILE = path.join(__dirname, 'token.json');

type TokenData = {
  accessToken: string;
  refreshToken: string;
  tokenExpiry: number; // epoch ms
};

export class TokenManager {
  private static accessToken: string | null = null;
  private static refreshToken: string | null = null;
  private static tokenExpiry: number | null = null;

  public static async getValidToken(): Promise<string> {
    // Load from file if not in memory
    if (!this.accessToken && fs.existsSync(TOKEN_FILE)) {
      const data: TokenData = JSON.parse(fs.readFileSync(TOKEN_FILE, 'utf-8'));
      this.accessToken = data.accessToken;
      this.refreshToken = data.refreshToken;
      this.tokenExpiry = data.tokenExpiry;
    }

    // If still valid, reuse
    if (this.accessToken && this.tokenExpiry && Date.now() < this.tokenExpiry) {
      return this.accessToken;
    }

    // If expired, refresh
    if (this.refreshToken) {
      return await this.refresh();
    }

    // If no tokens, do UI login
    return await this.uiLogin();
  }

  // Automate UI login to get tokens
  private static async uiLogin(): Promise<string> {
    //Use Playwright to automate login and consent
    //Example:
    // const page = await browser.newPage();
    // await page.goto('OAUTH_AUTHORIZE_URL');
    // await page.fill('input[name="username"]', process.env.OHRM_USERNAME);
    // await page.fill('input[name="password"]', process.env.OHRM_PASSWORD);
    // await page.click('button[type="submit"]');
    // await page.waitForURL('REDIRECT_URI*');
    // const url = page.url();
   //  Extract code from URL, exchange for tokens...

    // For now, fallback to manual refresh token
    return await this.refresh();
  }

  // Use refresh token to get new access token
  private static async refresh(): Promise<string> {
    const apiContext = await request.newContext();
    const resp = await apiContext.post(
      'http://localhost/orangehrm/orangehrm-5.7/web/index.php/oauth2/token',
      {
        form: {
          grant_type: 'refresh_token',
          client_id: process.env.OHRM_CLIENT_ID,
          refresh_token: this.refreshToken || process.env.OHRM_REFRESH_TOKEN,
        },
      }
    );
    const body = await resp.json();
    this.accessToken = body.access_token;
    this.refreshToken = body.refresh_token;
    this.tokenExpiry = Date.now() + (body.expires_in || 840) * 1000; // 14 min default

    fs.writeFileSync(
      TOKEN_FILE,
      JSON.stringify({
        accessToken: this.accessToken,
        refreshToken: this.refreshToken,
        tokenExpiry: this.tokenExpiry,
      })
    );

    return this.accessToken;
  }
}