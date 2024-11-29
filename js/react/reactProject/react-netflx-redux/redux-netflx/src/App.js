import './App.css';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import NavigationPage from './components/NavigationPage';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<NavigationPage />}> 
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
