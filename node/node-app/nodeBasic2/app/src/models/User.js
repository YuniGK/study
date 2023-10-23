"use strict";

const { response } = require("express");
const UserStorage = require('./UserStorge');

class User {
    //생성자
    constructor(body){
        this.body = body;
    }

    /* promises사용 시 데이터가 반환되는 때까지오래 걸려 async를 이용한다. */
    //메서드
    async login(){
        const client = this.body;
        /*
        동일하다.
        const users = UserStorage.getUsers('id', 'pwd'); 
        const {id, pwd} = UserStorage.getUsers('id', 'pwd'); 
        */
        console.log(await UserStorage.getUserInfo(client.id));
        const { id, pwd } = await UserStorage.getUserInfo(client.id); 
    
        if (id) {
          if (id === client.id && pwd === client.pwd) {
            return { success: true };
          }
          return { success: false, msg: "비밀번호가 틀렸습니다." };
        }
        return { success: false, msg: "존재하지 않는 아이디입니다." };
      }

    register(){
        const client = this.body;

        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
