import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProdcutPage from './page/ProdcutPage';
import ProdcutDetailPage from './page/ProdcutDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { useState } from 'react';

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  //로그인 및 접근 권한이 설정되어 있는 페이지 접속 방지
  const PrivateRoute = () => {
    //Navigate - 첫글자가 대문자인 경우 컴포넌트 -> 리다이렉트 시킬 수 있다.
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} /> 
        <Route path='/about' element={<AboutPage />} />
        <Route path='/products' element={<ProdcutPage />} />
        <Route path='/products/:id' element={<ProdcutDetailPage />} />
        <Route path='/login' element={<LoginPage / >} />
        <Route path='/user' element={<PrivateRoute />} />
      </Routes>      
    </div>
  );
}

export default App;
