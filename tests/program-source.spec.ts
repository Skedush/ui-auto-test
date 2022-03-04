import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
//测试节目
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=节目
  await page.locator('.sidebar a', { has: page.locator('text="节目"') }).click();
  // Click sidebar's a text=素材库
  await page.locator('.sidebar a', { has: page.locator('text="素材库"') }).click();
  // await expect(page).toHaveURL('/v2/zh/mcs/programs/lib');
});

// 测试素材查看
test('测试素材查看', async ({ page }) => {
  // click first class=table-link
  await page.locator('.table-link').first().click();
  // expect first label have text "素材"
  await expect(page.locator('label').first()).toHaveText('素材');
});
