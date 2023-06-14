import { test, expect } from '@playwright/test'

test.describe('Checkboxes test', ()=> {

    test('add element and check if is visible', async ({page}) =>{

        await page.goto('checkboxes')
        
        const checkbox1 = page.locator('input[type="checkbox"]').nth(0)

        await checkbox1.check()
        expect(checkbox1.isChecked()).toBeTruthy()

        const checkbox2 = page.locator('input[type="checkbox"]').nth(1)
        
        await checkbox2.uncheck()
        
        expect(await checkbox2.isChecked()).toBeFalsy()
    })
})