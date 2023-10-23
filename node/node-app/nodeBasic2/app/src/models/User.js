"use strict";

const UserStorage = require('./UserStorge');

class User {
    //생성자
    constructor(body){
        this.body = body;
    }

    //메서드
    login(){
        const client = this.body;
        /*
        동일하다.
        const users = UserStorage.getUsers('id', 'pwd'); 
        const {id, pwd} = UserStorage.getUsers('id', 'pwd'); 
        */
        const {id, pwd} = UserStorage.getUserInfo(client.id); 

        if(id){
            if(id === client.id && pwd === client.password){
                return {success : true};
            }else{
                return {success : false, msg : '로그인 실패'};
            }
        }else{
            return {success : false, msg : '로그인 실패'};
        }
    }

    register(){
        const client = this.body;

        const response = UserStorage.save(client);
        return response;
    }
}

module.exports = User;
