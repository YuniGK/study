"use strict";

const app = require('../app');

//변수
//env에서 설정한 값이 없을 경우 3000이 들어간다.
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log('server start');
});