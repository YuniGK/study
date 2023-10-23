"use strict";

const User = require('../../models/User');

/* 컨트롤러의 내용을 분리해준다. */
const output = {
    home : (req, res) => {
        res.render('home/index');
    }
    , login : (req, res) => {
        res.render('home/login');
    }
    , register : (req, res) => {
        res.render('home/register');
    }
    //페이지를 렌더링하는 api
}

/*
const process = {
    login : (req, res) => {
        console.log(req.body);
        
        const id = req.body.id
            , pwd = req.body.password;
        
        /
        생성자를 통해 UserStorage를 생성하나, 
        const UserStorage = new UserStorage();

        static을 사용할 경우 생성자 없이 사용이 가능하다.
        console.log(UserStorage.users) 

        getter를 통해서 은닉화한 데이터를 가지고 온다.
        console.log(UserStorage.getUsers); 
        
        필요한 데이터가 무엇인지 정의힌다.
        /
        const users = UserStorage.getUsers('id', 'pwd'); 
       
        console.log('id ', id, ' / pw ', pwd);

        const response = {};

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                response.success = true;
                return res.json(response);
            }
        }

        response.success = false;
        response.msg = '로그인 실패';
        return res.json(response);
        
    }
}
*/

const process = {
    login : async (req, res) => {    
        const user = new User(req.body);        
        const response = await user.login();
        return res.json(response);
    }
    ,register : async (req, res) => {    
        const user = new User(req.body);        
        const response = await user.register();
        return res.json(response);
    }
}

module.exports = {
    output
    , process
}