const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => { data += chunk; });
  res.on('end', () => {
    const matches = data.match(/\/images\/[a-zA-Z0-9_\-\.]+/g) || [];
    console.log('Images in HTML:', [...new Set(matches)]);
  });
}).on('error', (err) => {
  console.error('Error:', err.message);
});
