// test_order.js
fetch('http://localhost:3000/s-harfi-nasil-soylenir')
  .then(r => r.text())
  .then(t => {
    const i = t.indexOf('seo-tool-content');
    const j = t.indexOf('src="app.js"');
    console.log('seo-tool-content pos:', i);
    console.log('app.js pos:', j);
    console.log('seo BEFORE app.js:', i < j);
    console.log('seo found:', i !== -1);
    
    // Show what's around seo-tool-content
    if (i !== -1) {
      console.log('\n--- seo-tool-content surrounding HTML ---');
      console.log(t.substring(Math.max(0, i-100), i+200));
    }
  });
