"use strict";

const fs = require('fs').promises;

/* 임시데이터 */
class UserStorage{   
    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);

        if(isAll) return users;

        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});        
        return newUsers;
    }

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

    static getUsers(isAll, ...fields){
        return fs
            .readFile("./src/databases/users.json")
            .then((data) => {
                return this.#getUsers(data, isAll, fields);
            }).catch((err) => {
                console.err
            });
    }

    static getUserInfo(id){
        console.log();

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

    static async save(userInfo){
        //const users = await this.getUsers("id", "password", "name");
        const users = await this.getUsers(true);

        //id가 존재하는지 확인
        if(users.id.includes(userInfo.id)){
            throw "이미 존재하는 아이디입니다.";
        }else{            
            users.id.push(userInfo.id);
            users.name.push(userInfo.name);
            users.pwd.push(userInfo.pwd);

            fs.writeFile("./src/databases/users.json", JSON.stringify(users));
            
            return {success : true}
        }

        console.log(users)        
    }

}

module.exports = UserStorage;