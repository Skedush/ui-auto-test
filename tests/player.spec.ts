import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
// 测试播放器
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=播放器
  await page.locator('.sidebar a', { has: page.locator('text="播放器"') }).click();
  await expect(page).toHaveURL('https://192.168.31.12:18443/v2/zh/mcs/players');
});


// 测试播放器查看
test('测试播放器查看', async ({ page }) => {
  // Click .MuiGrid-root label hasText "修改时间" >> nth=0
  await page.locator('.MuiGrid-root label:has-text("修改时间")').nth(0).click();
  // expect first label have text "播放器"
  await expect(page.locator('label').first()).toHaveText('播放器');

});

