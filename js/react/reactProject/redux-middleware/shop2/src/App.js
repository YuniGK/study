import { Route, Routes } from 'react-router';
import './App.css';
import '../src/css/init.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import { useEffect } from 'react';
import PrivateRoute from './router/PrivateRoute';
import { useSelector } from 'react-redux';

function App() {
  const authenticate = useSelector((state) => state.auth.authenticate);  

  useEffect(()=>{   
  },[authenticate]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<ProductAll />} / >
        <Route path='/login' element={<Login />} / >
        <Route path='/product/:id' element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
