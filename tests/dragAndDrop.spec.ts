import { test, expect } from "@playwright/test";

test.describe("set viewport", () => {

  test("add element and check if is visible", async ({ page }) => {

    await page.goto("drag_and_drop");
    const squareFirstPlace = page.locator('.column').nth(0)
    
    expect(await squareFirstPlace.textContent()).toContain('A')

    const squareA = '#column-a'
    const squareB = '#column-b'

    await page.dragAndDrop(squareA, squareB)
    
    expect(await squareFirstPlace.textContent()).toContain('B')

  });
});
