const fs = require('fs');

// Simple JPEG decoder to inspect basic data or check file
['scangrip-inspection.jpg', 'ceramic-application.jpg', 'interior-detailing.jpg', 'polishing-machine.jpg', 'snow-foam-luxury.jpg', 'brush-detailing.jpg'].forEach(name => {
  const buf = fs.readFileSync('public/images/' + name);
  console.log(name, 'size:', buf.length, 'header:', buf.slice(0, 4).toString('hex'));
});
