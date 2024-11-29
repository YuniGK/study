
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='body'>
      <Routes>
        {/*
        <Route path='/' element={<AppLayout />}>
          //해당 Route 안에 작성된 페이지는 모두 AppLayout가 적용된다. 
          //path주소를 부모의 주소와 동일하게 사용할 경우 index라고 작성한다.
          <Route index element={<HomePage />} />
          <Route path='/movies' element={<MoviePage />} />
          <Route path='/movies/:id' element={<MovieDetailPage />}  />
        </Route>
        */}
        <Route path='/' element={<AppLayout />}> 
          <Route index element={<HomePage />} />

          <Route path='movies'>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MovieDetailPage />}  />
          </Route>
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
