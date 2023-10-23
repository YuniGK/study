"use strict";

const { userInfo } = require('os');

const fs = require('fs').promises;

/* 임시데이터 */
class UserStorage{   
    static #getUserInfo(data, id){
        const users = JSON.parse(data);
        console.log(users)

        const idx = users.id.indexOf(id);

        /* 
        keys - 키값만으로 배열을 만든다.
        reduce - 순회하며 해당 idx에 해당되는 id, pwd, name이 []에 담긴다.
        {} - 최종 값이 {}에 담긴다.
        */
        const userInfo = Object.keys(users).reduce((newUsers, info) => {
            newUsers[info] = users[info][idx];
            return newUsers;        
        }, {});   

        console.log(userInfo)
        return userInfo;
    }
    
    static getUsers(...fields){
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});        
        return newUsers;
    }

    static getUserInfo(id){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                //성공시 실행
                return this.#getUserInfo(data, id);
            }).catch((err) => {
                //실패 또는 에러났을 때 실행
                console.error
            });        
    }

    static save(userInfo){
        /*
        const users = this.#users;

        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.pwd.push(userInfo.password);

        console.log(users);
        return {success : true};
        */
    }

}

module.exports = UserStorage;