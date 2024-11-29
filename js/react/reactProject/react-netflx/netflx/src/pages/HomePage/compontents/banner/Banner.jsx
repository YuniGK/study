import React, { useState } from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import ClipLoader from "react-spinners/ClipLoader";
import {Alert} from 'react-bootstrap';
import './Banner.style.css'

const Banner = () => {
    let [loading, setLoading] = useState(true);
    const {data, isLoading, isError, error} = usePopularMoviesQuery();

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
    <div className='banner' style={{backgroundImage : "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}`+")"}}>
      <div className='banner-text text-white'>
        <h1>{data?.results[0].title}</h1>
        <p>{data?.results[0].overview}</p>
      </div>
    </div>
  )
}

export default Banner