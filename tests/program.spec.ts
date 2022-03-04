import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
//测试节目
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=节目
  await page.locator('.sidebar a', { has: page.locator('text="节目"') }).click();
  await expect(page).toHaveURL('https://192.168.31.12:18443/v2/zh/mcs/programs/lib');
});

// 测试节目查看
test('测试节目查看', async ({ page }) => {
  // click first class=table-link
  await page.locator('.table-link').first().click();
  // expect first label have text "节目"
  await expect(page.locator('label').first()).toHaveText('节目');
});
