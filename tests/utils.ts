import { Page } from "@playwright/test";

// 进入某个页面
// 导出
export async function enterPage(page: Page, titile: string) {
  await page.goto('https://192.168.31.12:18443');
  // Click headbar's a text=title
  await page.locator('.headbar a', { has: page.locator(`text="${titile}"`) }).click();
}