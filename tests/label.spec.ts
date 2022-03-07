import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
// 测试播放器
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=标签
  await page.locator('.sidebar a', { has: page.locator('text="标签"') }).click();
  // await expect(page).toHaveURL('/v2/zh/mcs/label');
});


// 测试标签查看
test('标签查看', async ({ page }) => {
  await page.locator('.MuiGrid-root :nth-match(span[title="编辑"], 1) button').click();
  await expect(page.locator('.srp-content-wrap span').first()).toHaveText('标签');

});