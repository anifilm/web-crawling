const client = require('cheerio-httpcli');
const request = require('request');
const fs = require('fs');
const urlType = require('url');

const savedir = __dirname + '/images';
if (!fs.existsSync(savedir)) { // 저장할 디렉터리가 없으면 생성
  fs.mkdirSync(savedir);
}

const url = 'https://ko.wikipedia.org/wiki/' + encodeURIComponent('강아지');
const param = {};

client.fetch(url, param, function (err, $, res) {
  if (err) {
    console.error('Error:', err);
    return;
  }

  $('img').each(function (idx) {
    let src = $(this).attr('src');
    src = urlType.resolve(url, src); // 상대 경로를 절대 경로로 변환

    let fname = urlType.parse(src).pathname;
    // 추출한 경로명에서 알파벳, 숫자, 도트 이외의 문자를 '_'로 변환
    fname = savedir + '/' + fname.replace(/[^a-zA-Z0-9\.]+/g, '_');

    // 파일 다운로드
    request(src).pipe(fs.createWriteStream(fname));
  });
});
