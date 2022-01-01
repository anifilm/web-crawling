const client = require('cheerio-httpcli');
const urlType = require('url');

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
    if (!href) return;
    const href2 = urlType.resolve(url, href); // 상대 경로를 절대 경로로 변환
    console.log(text + ': ' + href);
    console.log(' => ' + href2 + '\n');
  });
});
