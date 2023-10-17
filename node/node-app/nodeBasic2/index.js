"use strict";

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./routes/home');

//변수
const POST = 3000;

//app셋팅
app.set('views', './views');
app.set('view engine', 'ejs');

/* use 미들웨어를 등록해주는 메서드이다. 
routes / home / index.js에 정의한 api를 호출한다.*/
app.use('/', home);

app.listen(POST, ()=>{
    console.log('server start');
});