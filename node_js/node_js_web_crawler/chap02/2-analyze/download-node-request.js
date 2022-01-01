const request = require('request');
const fs = require('fs');

const url = 'https://jpub.tistory.com';
const savepath = 'test.html';

request(url).pipe(fs.createWriteStream(savepath));
