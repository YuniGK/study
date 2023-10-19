"use strict";

/* 프론트 js */
const id = document.querySelector('#id')//id선택자를 가져온다.
, pwd = document.querySelector('#pwd')
, loginBtn = document.querySelector('button');

loginBtn.addEventListener('click', login);

function login() {
    const req = {
        id : id.value
        , password : pwd.value
    };

    //데이터를 서버로 전송한다.
    fetch('/login', {
        method : 'POST',//전송 방식
        headers : {"Content-Type" : 'application/json'},//전송할 데이터 타입을 명시
        body : JSON.stringify(req)//전송될 데이터
    })
    .then((res) => res.json())
    .then((res) => console.log(res));
    //.then((res) => console.log);//위와 동일
}