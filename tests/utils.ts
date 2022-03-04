import { Page } from "@playwright/test";

// 进入某个页面
// 导出
export async function enterPage(page: Page, titile: string) {
  await page.goto('');
  // Click headbar's a text=title
  await page.locator('.headbar a', { has: page.locator(`text="${titile}"`) }).click();
}