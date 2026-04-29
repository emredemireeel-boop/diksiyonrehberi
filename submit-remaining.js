const { google } = require('googleapis');
const key = require('./scripts/service-account.json');
const fs = require('fs');

async function submitRemaining() {
  console.log('Starting remaining URL submission (41 items) to Google Indexing API...');

  const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
  );

  try {
    await jwtClient.authorize();
    console.log('Successfully authenticated with Google Cloud.');
  } catch (err) {
    console.error('Authentication failed:', err);
    return;
  }

  // Get URLs
  let urls = [];
  try {
    const res = await fetch('http://localhost:3000/sitemap.xml');
    if (!res.ok) throw new Error('Sitemap server returned ' + res.status);
    const xml = await res.text();
    const regex = /<loc>(.*?)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
      urls.push(match[1]);
    }
  } catch (err) {}

  // The 4 new pages
  const newPages = [
    'https://www.diksiyonrehberi.com/retorik',
    'https://www.diksiyonrehberi.com/diyalektik',
    'https://www.diksiyonrehberi.com/siir',
    'https://www.diksiyonrehberi.com/safsata'
  ];

  // We need 41 total. So take newPages (4), then add 37 random important pages from urls that weren't in the newPages.
  const filtered = urls.filter(u => !newPages.includes(u));
  // Pick the homepage and 36 others
  const homepage = filtered.find(u => u === 'https://www.diksiyonrehberi.com/');
  const others = filtered.filter(u => u !== homepage).slice(0, 36);

  const toSubmit = [...newPages];
  if (homepage) toSubmit.push(homepage);
  toSubmit.push(...others);

  // Take exactly 41
  const finalSubmit = toSubmit.slice(0, 41);

  console.log(`Submitting ${finalSubmit.length} URLs to fill the remaining quota...`);

  const indexing = google.indexing({ version: 'v3', auth: jwtClient });

  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < finalSubmit.length; i++) {
    const url = finalSubmit[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      successCount++;
      console.log(`Submitted ${i + 1}/${finalSubmit.length}: ${url}`);
    } catch (err) {
      failCount++;
      console.error(`Failed to submit ${url}:`, err.message);
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  console.log('--- Done ---');
  console.log(`Successfully submitted: ${successCount}`);
  console.log(`Failed submissions: ${failCount}`);
}

submitRemaining();
