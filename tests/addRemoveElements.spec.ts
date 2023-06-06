import { test, expect } from '@playwright/test'

test.describe('add_remove_elements', ()=> {

    test('add element and check if is visible', async ({page}) =>{

        await page.goto('add_remove_elements/')
        const btnAddElement = page.getByRole('button', { name: 'Add Element'})

        await expect(btnAddElement).toBeVisible()
        await btnAddElement.click()

        const deleteBtn = page.locator('.added-manually')
        await expect(deleteBtn).toBeVisible()

        const deleteBtnText = await page.locator('.added-manually').textContent()
        console.log(deleteBtnText)
        
        
        // expect(deleteBtnText.includes('Delete')).toBeTruthy()

        expect(deleteBtnText==="Delete").toBeTruthy()
    })
})