const https = require('https');
https.get('https://eikaiwa.dmm.com/blog/learning-english/business/co-ltd-inc-corp/', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const match = data.match(/<meta property="og:image" content="([^"]+)"/);
    console.log(match ? match[1] : 'Not found');
  });
});
