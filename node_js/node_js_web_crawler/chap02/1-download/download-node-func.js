const http = require('https'); // https:// 주소로 접속하기 위해 https 모듈을 임포트
const fs = require('fs');

function download(url, savepath, callback) {
  const outfile = fs.createWriteStream(savepath);
  http.get(url, function (res) {
    res.pipe(outfile);
    res.on('end', function () {
      outfile.close();
      callback();
    });
  });
}

// 다운로드 1
download(
  'https://jpub.tistory.com/539',
  'spring.html',
  function () {
    console.log('ok, spring.');
  }
);

// 다운로드 2
download(
  'https://jpub.tistory.com/537',
  'angular.html',
  function () {
    console.log('ok, angular.');
  }
);
