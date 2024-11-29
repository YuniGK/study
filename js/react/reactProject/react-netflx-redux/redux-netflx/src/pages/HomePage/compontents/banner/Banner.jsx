import React, { useEffect } from 'react'
import './Banner.style.css'
import { useDispatch, useSelector } from 'react-redux';
import { popularMovies } from '../../../../redux/reducers/moviesSlice';
import { ClipLoader } from 'react-spinners';
import { Alert } from 'react-bootstrap';

const Banner = () => {
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
      dispatch(popularMovies());
    }, []);
  
  return (
    <div>
    {movieList.length !== 0 ?
      <div className='banner' style={{backgroundImage : "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${movieList?.results[0]?.poster_path}`+")"}}>
        <div className='banner-text text-white'>
          <h1>{movieList?.results[0]?.title}</h1>
          <p>{movieList?.results[0]?.overview}</p>
        </div>
      </div>
     : <div></div>
    }
    </div>
  )
}

export default Banner