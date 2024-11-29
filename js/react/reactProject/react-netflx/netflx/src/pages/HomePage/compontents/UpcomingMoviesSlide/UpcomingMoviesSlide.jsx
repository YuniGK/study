import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {Alert} from 'react-bootstrap';
import { useUpcomingMovies } from '../../../../hooks/useUpcomingMovies ';

import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {popularMoviesResponsive} from '../../../../constants/responsive';

const PopularMoviesSlide = () => {
    let [loading, setLoading] = useState(true);
    const {data, isLoading, isError, error} = useUpcomingMovies();

    if(isLoading){
      <ClipLoader
        color="#000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    }

    if(isError){
      <Alert key="danger" variant="danger">{error.message}</Alert>
    }
      
  return (
    <div className='upcoming-movies'>
      <MovieSlider title={'개봉예정 영화'} data={data?.results} responsive={popularMoviesResponsive} />
    </div>
  )
}

export default PopularMoviesSlide