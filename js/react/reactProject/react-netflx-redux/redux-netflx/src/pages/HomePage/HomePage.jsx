import React from 'react'
import './HomePage.style.css'
import Banner from './compontents/banner/Banner'
import PopularMoviesSlide from './compontents/PopularMoviesSlide/PopularMoviesSlide'
import TopMoviesSlide from './compontents/TopMoviesSlide/TopMoviesSlide'
import UpcomingMoviesSlide from './compontents/UpcomingMoviesSlide/UpcomingMoviesSlide'

const HomePage = () => {    
  return (
    <div className='home-banner'>
      <Banner />

      <PopularMoviesSlide />
      <TopMoviesSlide />
      <UpcomingMoviesSlide /> 
    </div>
  )
}

export default HomePage