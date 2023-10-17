"use strict";

/* 컨트롤러의 내용을 분리해준다. */
const home = (req, res) => {
    res.render('home/index');
}

const login = (req, res) => {
    res.render('home/login');
}

module.exports = {
    home
    , login
}