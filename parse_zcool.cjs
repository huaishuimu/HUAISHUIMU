const fs = require('fs');
const html = fs.readFileSync('/tmp/zcool.html', 'utf8');
console.log('HTML Length:', html.length);

const mTitle = html.match(/<title>([\s\S]*?)<\/title>/i);
if (mTitle) {
  console.log('Title:', mTitle[1].trim());
}

const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
if (nextDataMatch) {
  console.log('Found __NEXT_DATA__!');
  fs.writeFileSync('next_data.json', nextDataMatch[1]);
}

const urls = html.match(/https?:\/\/[a-zA-Z0-9_\-\.\/]+?\.(?:jpg|jpeg|png|webp)/gi) || [];
console.log('Image URLs total:', urls.length);
const uniqueUrls = Array.from(new Set(urls));
console.log('Unique image URLs:', uniqueUrls.length);
for (const u of uniqueUrls) {
  console.log(u);
}
