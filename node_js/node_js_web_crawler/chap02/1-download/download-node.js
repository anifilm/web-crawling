const http = require('https'); // https:// 주소로 접속하기 위해 https 모듈을 임포트
const fs = require('fs');

const url = 'https://jpub.tistory.com/';
const savepath = 'test.html';

const outfile = fs.createWriteStream(savepath);

http.get(url, function (res) {
  res.pipe(outfile);
  res.on('end', function () {
    outfile.close();
    console.log('ok');
  });
});
