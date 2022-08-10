const { test, expect, browser } = require('@playwright/test');

// test('input', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/forgot_password');
//   await page.locator('#email').type('test@test.te', { delay: 200 })
//   await page.locator('[type="submit"]').click()
// });

// test('clicks', async ({ page }) => {
//   await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
//   await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
//   await page.click('#t2 > table > tr:nth-child(1) > td:nth-child(7) > button')
// });

// test('dropdown', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/dropdown');
//   const dropdown = await page.locator('#dropdown');
//   await dropdown.selectOption({index: 1});
// });

// test('checkbox', async ({ page }) => {
//   await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
//   await page.locator('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)').check();
//   await page.locator('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]:nth-child(4)').uncheck();
//   await page.locator('#main > div.w3-row > div:nth-child(2) > label:nth-child(4)').check()
//   await page.locator('#main > div.w3-row > div:nth-child(2) > label:nth-child(4)').uncheck()
//   await page.locator('#main > div.w3-row > div:nth-child(1) > input[type=radio]:nth-child(9)').check()
//   await page.locator('#main > div.w3-row > div:nth-child(3) > label:nth-child(4) > span').check()
// });

// test('elementState', async ({ page }) => {
//   await page.goto('https://demoqa.com/automation-practice-form');
//   const firstName = await page.locator('#firstName');
//   const sportsCheck = await page.locator('#hobbies-checkbox-1');
//   const submitBtn = await page.locator('#submit');

//   console.log(await firstName.isDisabled());
//   console.log(await firstName.isEnabled());
//   console.log(await firstName.isEditable());
//   console.log(await sportsCheck.isChecked());
//   console.log(await sportsCheck.isVisible());
//   console.log(await submitBtn.isHidden());
//   console.log(await submitBtn.isVisible());
// });

// test('keyPresses', async ({ page }) => {
//   await page.goto('https://the-internet.herokuapp.com/key_presses');
//   await page.click('#target');
//   await page.keyboard.type('test text')
//   await page.keyboard.down('Shift');
//   for (let i = 0; i < ' exit vim'.length; i++) {
//     await page.keyboard.press('ArrowLeft');
//   }
//   await page.keyboard.up('Shift');
//   await page.keyboard.press('Backspace');
//   await page.keyboard.type(' walk into mordor');
// });

// test('screenshots', async ({ page }) => {
//   await page.goto('https://applitools.com/');
//   await page.screenshot({path: 'screenshotMainPage.png'});
//   await page.locator('.logo').screenshot({path: 'logo.png'});
//   await page.locator('.wp-container-6').screenshot({path: 'elementsScreen.png'});
//   const headerImage = await page.locator('.header-image')
//   await headerImage.screenshot({path: 'headerImage.png'})
// });

// test('videos', async ({ browser }) => {
//   const contex = await browser.newContext({
//     recordVideo: {
//       dir: "./recordings"
//     }
//   });
//   const page = await contex.newPage();
//   await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');
//   await page.click('#start');
//   await page.waitForSelector('#loading', { state: 'hidden' });
//   await page.waitForTimeout(100);
//   await browser.close();
// });

