const client = require('cheerio-httpcli');

const url = 'https://jpub.tistory.com';
const param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  $('a').each(function (idx) {
    const text = $(this).text();
    const href = $(this).attr('href');
    console.log(text + ': ' + url + href);
  });
});
