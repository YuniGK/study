import React, { useEffect } from 'react'
import './MovieCard.style.css'
import { Badge } from 'react-bootstrap'
import { faPeopleGroup, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { genreMovies } from '../../redux/reducers/moviesSlice'

const MovieCard = ({movie}) => {
  const dispatch = useDispatch();
  const {gener:genreData} = useSelector((state)=>state.movie);

  useEffect(() => {
    dispatch(genreMovies());
  }, []);

  const showGenre = (genreIdList) => {
    if(!genreData) return [];
    if(!genreIdList) return [];

    const genreNameList = genreIdList?.map((id)=>{
      if(genreData.length !== 0){
        const genreObj = genreData?.find((genre) => (genre.id === id))
        return genreObj.name;
      }else{
        return []
      }      
    });
    return genreNameList;
  }

  return (
    <div className='movie-card'>
      <div className='movie-img' style={{backgroundImage : "url("+`https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`+")"}}></div>
     
      <div className='movie-slider-info'>
        <h2>{movie.title}</h2>
        <div className='movie-id'>
            {showGenre(movie.genre_ids).map((id, idx) => (
              <Badge bg="primary" key={idx}>{id}</Badge>
            ))}
        </div>
        <div className='movie-info'>
          <div><FontAwesomeIcon icon={faThumbsUp} /> {movie.vote_average}</div>
          <div><FontAwesomeIcon icon={faPeopleGroup} /> {movie.popularity}</div>
          <div className={`adult ${movie.adult ? "adult-true" : "adult-false"}`}>{movie.adult ? '18세 이상' : '18세 이하'}</div>
        </div>
      </div>
    </div>
  )
}

export default MovieCard