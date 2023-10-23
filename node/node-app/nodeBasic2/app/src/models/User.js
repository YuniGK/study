"use strict";

const UserStorage = require('./UserStorge');

class User {
    //생성자
    constructor(body){
        this.body = body;
    }

    //메서드
    login(){
        const body = this.body;
        /*
        동일하다.
        const users = UserStorage.getUsers('id', 'pwd'); 
        const {id, pwd} = UserStorage.getUsers('id', 'pwd'); 
        */
        const {id, pwd} = UserStorage.getUserInfo(body.id); 

        if(id){
            if(id === body.id && pwd === body.password){
                return {success : true};
            }else{
                return {success : false, msg : '로그인 실패'};
            }
        }else{
            return {success : false, msg : '로그인 실패'};
        }
    }
}

module.exports = User;
