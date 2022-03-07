import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
// 测试播放审计
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=播放审计
  await page.locator('.sidebar a', { has: page.locator('text="播放审计"') }).click();
  // await expect(page).toHaveURL('/v2/zh/mcs/players');
});


// 测试标签查看
test('标签查看', async ({ page }) => {
  await expect(page.locator('thead tr .first')).toHaveText('播放器名称');

});