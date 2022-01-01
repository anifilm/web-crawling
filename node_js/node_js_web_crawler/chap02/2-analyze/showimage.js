const client = require('cheerio-httpcli');
const urlType = require('url');

const url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
const param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  $('img').each(function (idx) {
    let src = $(this).attr('src');
    src = urlType.resolve(url, src);
    console.log(src);
  });
});
