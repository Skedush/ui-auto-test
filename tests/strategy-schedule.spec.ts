import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
//测试排期页面
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=发布策略
  await page.locator('.sidebar a', { has: page.locator('text="发布策略"') }).click();
  // Click sidebar's a text=排期
  await page.locator('.sidebar a', { has: page.locator('text="排期"') }).click();
  // await expect(page).toHaveURL('/v2/zh/mcs/programs/lib');
});

// 测试排期项
test('测试排期', async ({ page }) => {

  // expect button exist
  await expect(page.locator('button:has-text("新建排期")')).toBeVisible()

  // expect first label have checkbox
  await expect(page.locator('input[type="checkbox"]').first()).toBeVisible()
  
});
