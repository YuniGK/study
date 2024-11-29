import { Navigate, Route, Routes } from 'react-router';
import './App.css';
import '../src/css/init.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import PrivateRoute from './router/PrivateRoute';

function App() {
  //true - 로그인 함 / false - 로그인 안됨
  const [authenticate, setAuthenticate] = useState(false);

  useEffect(()=>{    

  },[authenticate]);

  return (
    <div>
      <Navbar setAuthenticate={setAuthenticate} authenticate={authenticate} />
      <Routes>
        <Route path='/' element={<ProductAll />} / >
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} / >
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
