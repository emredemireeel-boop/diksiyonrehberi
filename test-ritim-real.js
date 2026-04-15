const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000');
  
  // Try clicking Ritim in the top nav specifically
  await page.click('#tnav-ritim');
  await page.waitForTimeout(1000);
  
  const outerHTML = await page.$eval('#ritim-interactive-container', el => el.outerHTML);
  console.log('RITIM HTML LENGTH:', outerHTML.length);
  const isVisible = await page.$eval('#ritim-interactive-container', el => el.style.display !== 'none');
  console.log('IS VISIBLE?', isVisible);

  await page.screenshot({ path: 'ritim_test_real.png' });
  await browser.close();
})();
