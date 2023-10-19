"use strict";

//모듈
const express = require('express');
const router = express.Router();

//라우팅
const ctrl = require('./home.ctrl');

/*
router.get('/', (req, res) => {
    //res.send('root page');
    res.render('home/index');
});

router.get('/login', (req, res) => {
    //res.sendFile(__dirname+'/views/index.html');
    res.render('home/login');
});
*/
router.get('/', ctrl.home);

router.get('/login', ctrl.login);

//외부에서 사용할 수 있도록 내보낸다.
module.exports = router;