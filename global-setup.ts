// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch({
    args: ['--ignore-certificate-errors'],
  });
  const page = await browser.newPage();
  // go to login page
  await page.goto('https://192.168.31.12:18443/v2/zh/login');
  // login
  // type username in placeholder="请输入用户名" 
  // type password in placeholder="请输入密码"
  // click input with type="submit"
  await page.type('input[placeholder="请输入用户名"]', 'liuxia');
  await page.type('input[placeholder="请输入密码"]', 'liuxia123');
  await page.click('input[type="submit"]');

  // wait for page to load
  await page.waitForNavigation();
  // save storage state
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;