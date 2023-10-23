"use strict";

/* 임시데이터 */
class UserStorage{
    /* static - 외부에서도 접속이 가능하다.
    #를 통해서 은닉화해준다. (private 변수로 변경한다.)*/
    static #users = {
        id : ['test', 'root', 'yuni']
        , pwd : ['test', 'root', '123']
        , name : ['김아무개', '이아무개', '박아무개']
    };

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

}

module.exports = UserStorage;