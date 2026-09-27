const fs = require('fs');
const html = fs.readFileSync('/tmp/zcool.html', 'utf8');
console.log('HTML Length:', html.length);

const mTitle = html.match(/<title>([\s\S]*?)<\/title>/i);
if (mTitle) {
  console.log('Title:', mTitle[1].trim());
}

// look for __NEXT_DATA__ or window.__INITIAL_STATE__
const nextDataMatch = html.match(/<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/);
if (nextDataMatch) {
  console.log('Found __NEXT_DATA__!');
  fs.writeFileSync('/tmp/next_data.json', nextDataMatch[1]);
}

const stateMatch = html.match(/window\.__INITIAL_STATE__\s*=\s*(\{[\s\S]*?\});/);
if (stateMatch) {
  console.log('Found __INITIAL_STATE__!');
  fs.writeFileSync('/tmp/initial_state.json', stateMatch[1]);
}

const urls = html.match(/https?:\/\/[a-zA-Z0-9_\-\.\/]+?\.(?:jpg|jpeg|png|webp)/gi) || [];
console.log('Image URLs total:', urls.length);
const uniqueUrls = Array.from(new Set(urls));
console.log('Unique image URLs:', uniqueUrls.length);
for (const u of uniqueUrls) {
  console.log(u);
}
