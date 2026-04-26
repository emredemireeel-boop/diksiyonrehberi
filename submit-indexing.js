const { google } = require('googleapis');
const key = require('./diksiyon-rehberi-36a06c448bbb.json');
const fs = require('fs');

async function submitUrls() {
  console.log('Starting URL submission to Google Indexing API...');
  
  // 1. Authenticate
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

  // 2. Get URLs to index. We'll use the local server sitemap for now.
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
    console.log(`Found ${urls.length} URLs in sitemap.`);
  } catch (err) {
    console.error('Failed to fetch sitemap:', err);
    return;
  }

  // Prioritize new ones: Categories first, then specific letters, then the rest.
  const categories = urls.filter(u => u.includes('/kategori/'));
  const letters = urls.filter(u => u.includes('/tekerlemeler/') && !u.includes('/kategori/'));
  const others = urls.filter(u => !u.includes('/tekerlemeler/'));
  
  const orderedUrls = [...categories, ...letters, ...others];
  const toSubmit = orderedUrls.slice(0, 200); // 200 daily quota limit

  console.log(`Submitting ${toSubmit.length} URLs...`);

  // 3. Submit
  const indexing = google.indexing({ version: 'v3', auth: jwtClient });
  
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < toSubmit.length; i++) {
    const url = toSubmit[i];
    try {
      await indexing.urlNotifications.publish({
        requestBody: {
          url: url,
          type: 'URL_UPDATED'
        }
      });
      successCount++;
      if (i % 20 === 0) console.log(`Submitted ${i+1}/${toSubmit.length}`);
    } catch (err) {
      failCount++;
      console.error(`Failed to submit ${url}:`, err.message);
      // Wait a bit on error to avoid rapid retries failing
      await new Promise(r => setTimeout(r, 1000));
    }
  }

  console.log('--- Done ---');
  console.log(`Successfully submitted: ${successCount}`);
  console.log(`Failed submissions: ${failCount}`);
}

submitUrls();
