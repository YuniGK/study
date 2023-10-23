/* 설정 등록 */
const mysql = require('mysql');

const db = mysql.createConnection({
    host : "aws일 경우 엔드포인트"
    , user : "아이디"
    , password : "비밀번호"
    , database : "테이블명"
});

//연결
db.connect();

module.exports = db;
