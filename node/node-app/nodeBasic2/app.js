"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/home');

//app셋팅
app.set('views', './views');
app.set('view engine', 'ejs');

/* use 미들웨어를 등록해주는 메서드이다. 
routes / home / index.js에 정의한 api를 호출한다.*/
app.use('/', home);

module.exports = app;

/*
기존에 node 실행 코드
nodemon app.js였으나 실행 부분을 분래해줘서 아래의 코드로 실행이 된다.
nodemon ./bin/www.js
*/