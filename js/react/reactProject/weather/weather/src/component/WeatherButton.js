import React from 'react'

import { Button, ButtonGroup } from 'react-bootstrap';

const WeatherButton = ({cityList, selectedCity, handleCityChange}) => {
  // https://react-bootstrap.netlify.app/docs/components/buttons
  return (
    <div className='weather-btn'>      
      <ButtonGroup aria-label="Basic example">           
        {cityList?.map((city, idx) => (
            selectedCity === "" ? (
              <Button variant={`${city === "Kwangmyŏng" ? "light" : "dark"}`} key={idx}
                onClick={()=>handleCityChange(city)} >
                {city}
              </Button>  
            ):(
              <Button variant={`${selectedCity === city ? "light" : "dark"} `} key={idx}
                onClick={()=>handleCityChange(city)} >
                {city}
              </Button>  
            )
        ))}
      </ButtonGroup>
    </div>
  )
}

export default WeatherButton