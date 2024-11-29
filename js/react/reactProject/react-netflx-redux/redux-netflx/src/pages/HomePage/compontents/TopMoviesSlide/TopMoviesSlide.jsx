import React, { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {Alert} from 'react-bootstrap';

import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {popularMoviesResponsive} from '../../../../constants/responsive';
import { useDispatch, useSelector } from 'react-redux';
import { topMovies } from '../../../../redux/reducers/moviesSlice';

const TopMoviesSlide = () => {
  const dispatch = useDispatch();
  const {movieList, isLoading, error} = useSelector((state)=>state.movie);

    if(isLoading){
      <ClipLoader
        color="#000"
        loading={isLoading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    if(error){
      <Alert key="danger" variant="danger">{error.message}</Alert>
    }

    useEffect(() => {
      dispatch(topMovies());
    }, []);

  return (
    <div className='top-movies'>
        <MovieSlider title={'최고평점 영화'} data={movieList?.results} responsive={popularMoviesResponsive} />
    </div>
  )
}

export default TopMoviesSlide