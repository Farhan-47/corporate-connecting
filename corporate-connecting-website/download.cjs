const https = require('https');
const fs = require('fs');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  try {
    if (!fs.existsSync('public')) {
      fs.mkdirSync('public');
    }
    await download('https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_uploads/1740828134062/wall%20panelling.jpg', 'public/wall-panelling.jpg');
    await download('https://storage.googleapis.com/aistudio-janus-prod-appspot-com/user_uploads/1740828134062/false%20ceiling.jpg', 'public/false-ceiling.jpg');
    console.log('Downloaded successfully');
  } catch (e) {
    console.error(e);
  }
}

run();
