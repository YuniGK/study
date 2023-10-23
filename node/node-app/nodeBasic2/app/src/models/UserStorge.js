"use strict";

const fs = require('fs');

/* 임시데이터 */
class UserStorage{   
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) =>{
            if(users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        fs.readFile("./src/databases/users.json", (err, data) => {
            if(err) throw err;
            const users = JSON.parse(data);

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
        });
        return userInfo;
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