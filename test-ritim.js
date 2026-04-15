const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));

  await page.goto('http://localhost:3000');
  
  console.log('Clicking on Ritim tab...');
  await page.click('[data-cat="ritim"]');
  
  await page.waitForTimeout(2000); // give it time to evaluate
  await browser.close();
})();
