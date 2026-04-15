const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 2000 });
  await page.goto('http://localhost:3000');
  
  await page.click('#tnav-ritim');
  await page.waitForTimeout(1000);
  
  await page.screenshot({ path: 'ritim_test_full.png', fullPage: true });
  await browser.close();
})();
