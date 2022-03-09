import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';
//测试排期页面
test.beforeEach(async ({ page }) => {
  // 进入信息发布页面
  await enterPage(page, '信息发布');
  // Click sidebar's a text=发布策略
  await page.locator('.sidebar a', { has: page.locator('text="发布策略"') }).click();
  // Click sidebar's a text=垫片
  await page.locator('.sidebar a', { has: page.locator('text="垫片"') }).click();
  
});

// 测试垫片项
test('垫片详情页标志按钮存在', async ({ page }) => {

  // expect button exist
  await expect(page.locator('button:has-text("新建垫片")')).toHaveCount(1)

  // expect first label have checkbox
  await expect(page.locator('input[type="checkbox"]').first()).toHaveCount(1)
  // click first idle item
  await page.locator('label', { hasText: "节目:" }).first().click()
  // expect button:has-text("删除") exist
  await expect(page.locator('button:has-text("删除")')).toHaveCount(1)
  // expect button:has-text("保存") exist
  await expect(page.locator('button:has-text("保存")')).toHaveCount(1)

  
});
