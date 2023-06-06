import { test, expect } from '@playwright/test'

test.describe('set viewport', ()=> {

    test('add element and check if is visible', async ({page}) =>{

        await page.setViewportSize({width:2560, height: 1259})
        await page.goto('/')
        
        // go to config file and add: 

        // {
        //     name: 'chromium',
        //     use: { ...devices['Desktop Chrome'],
        //     viewport: {width: 2560, height: 1259} },
          
        //   },
      
    })
})