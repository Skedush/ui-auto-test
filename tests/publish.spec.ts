import { test, expect, Page, Locator } from '@playwright/test';
import { enterPage } from './utils';

// 测试素材查看
test.beforeEach(async ({ page }) => {
    // 进入信息发布页面
    await enterPage(page, '信息发布');
    // Click button:has-text("手动发布")
    await page.locator('button:has-text("手动发布")').click();
  });
test('测试手动发布-节目库中的第一个节目有内容', async ({ page }) => {
    // Click button:has-text("添加节目")
    await page.locator('button:has-text("添加节目")').click();
    // expect first label-link exist
    await expect(page.locator('.table-link').first()).toBeVisible()
    // expect first radio exist
    await expect(page.locator('input[type="radio"]').first()).toBeVisible()
});

test('测试手动发布-播放器库中的第一个播放器有内容', async ({ page }) => {
    // Click button:has-text("添加播放器")
    await page.locator('button:has-text("添加播放器")').click();
    // expect first span exist
    await expect(page.locator('label').first()).toBeVisible()
    await expect(page.locator('label').first()).toHaveText('修改时间:')

  });
