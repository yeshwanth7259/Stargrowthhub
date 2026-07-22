const https = require('https');
const options = {
  hostname: 'housing.com',
  path: '/in/buy/resale/page/20245677-2-bhk-apartment-in-matunga-east-for-rs-22500000',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};
https.get(options, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const matches = data.match(/https:\/\/[a-zA-Z0-9-.]+\.housingcdn\.com\/[^\s\"\'\\]+/g);
    if(matches) console.log([...new Set(matches)]);
    else console.log('no images found');
  });
}).on('error', err => console.log('Error:', err.message));
