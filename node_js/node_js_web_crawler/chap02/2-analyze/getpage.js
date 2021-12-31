const client = require('cheerio-httpcli');

const url = 'https://jpub.tistory.com';
const param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  const body = $.html();
  console.log(body);
});
