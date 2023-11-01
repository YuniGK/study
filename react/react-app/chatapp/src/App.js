/* eslint-disable */ 
import { useEffect, useState } from 'react';
import './App.css';
import socket from './server';

function App() {
  useEffect(() => {
    askUserName();
  }, []);

  //유저 정보를 저장하기 위한 state
  const[user, setUser] = useState(null);

  const askUserName = () => {   
    const userName = prompt("당신의 이름을 입력하세요.")
    console.log("user name ", userName) 

    //로그인을 위해 유저이름과 콜백함수를 보낸다.
    //emit처리가 되면 콜백함수로 응답을 받는다.
    socket.emit("login", userName, (res) => {
      console.log('Res ', res);

      //if(res.ok){
      if(res?.ok){
        //유저정보를 저장
        setUser(res.data);
      }
    });
  }

  return (
    <>
      <div className="App"></div>
    </>
  );
}

export default App;