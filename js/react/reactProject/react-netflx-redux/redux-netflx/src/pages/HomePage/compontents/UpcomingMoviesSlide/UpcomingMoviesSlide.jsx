import React, { useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {Alert} from 'react-bootstrap';

import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {popularMoviesResponsive} from '../../../../constants/responsive';
import { upcomingMovies } from '../../../../redux/reducers/moviesSlice';
import { useDispatch, useSelector } from 'react-redux';

const UpcomingMoviesSlide = () => {
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
      dispatch(upcomingMovies());
    }, []);
      
  return (
    <div className='upcoming-movies'>
      <MovieSlider title={'개봉예정 영화'} data={movieList?.results} responsive={popularMoviesResponsive} />
    </div>
  )
}

export default UpcomingMoviesSlide