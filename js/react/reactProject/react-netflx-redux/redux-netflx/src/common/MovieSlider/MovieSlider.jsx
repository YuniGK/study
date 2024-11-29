import React from 'react'
import './MovieSlider.style.css';
import Carousel from 'react-multi-carousel';
import MovieCard from '../MovieCard/MovieCard';
import 'react-multi-carousel/lib/styles.css';

const MovieSlider = ({title, data, responsive}) => {  
  const size = data? Object.keys(data).length : 0;
  return (
    <div className='movie-slider'>
        <h3 className='title'>{title}</h3>
       {
        size !== 0 ? (
          <Carousel
          infinite={true}
          autoPlaySpeed={800}
          customTransition="all .5"
          transitionDuration={500}
          centerMode={true}
          itemClass="movie-slider p-1"
          containerClass='carousel-container'
          responsive={responsive}
          >
            
            {data?.map((movie, index) => (
                <MovieCard key={index} movie={movie} />
            ))}
        </Carousel>
        )  : (
          <div></div>
        )
       }
    </div>
  )
}

export default MovieSlider