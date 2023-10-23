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

    static getUserInfo(id){
        const users = this.#users;
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

        return userInfo;
    }

}

module.exports = UserStorage;