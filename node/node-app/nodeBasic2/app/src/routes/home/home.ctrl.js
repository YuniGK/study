"use strict";

/* 컨트롤러의 내용을 분리해준다. */
const output = {
    home : (req, res) => {
        res.render('home/index');
    }
    , login : (req, res) => {
        res.render('home/login');
    }
    //페이지를 렌더링하는 api
}

/* 임시데이터 */
const users = {
    id : ['test', 'root', 'yuni']
    , pwd : ['test', 'root', '123']
}

const process = {
    login : (req, res) => {
        console.log(req.body);
        
        const id = req.body.id
            , pwd = req.body.password;

        console.log('id ', id, ' / pw ', pwd);

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.pwd[idx] === pwd){
                return res.json({ success : true });
            }
        }

        return res.json({
            success : false
            , msg : '로그인 실패'
        });

    }
}

module.exports = {
    output
    , process
}