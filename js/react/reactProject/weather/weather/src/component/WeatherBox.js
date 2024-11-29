import React from 'react'

//const WeatherBox = (props) => {
const WeatherBox = ({weather}) => {
    //props를 사용했을 경우, props.weather을 이용해서 데이터를 가져온다.
  return (
    <div className='weather'>
        {/*
        weather? weather이 있으면 실행        
        <h1>{weather?.name}</h1>
        <h2>{weather?.main.temp}C / {(weather?.main.temp*1.8+32).toFixed(2)}화씨</h2>

        <h3>{weather?.weather[0].main}</h3>
        */}

        {weather &&                        
        <>
            <h1>{weather.name}</h1>
            <h2>{weather.main.temp}C / {(weather.main.temp*1.8+32).toFixed(2)}화씨</h2>

            <h3>{weather.weather[0].main}</h3>     
        </>
        }   
    </div>
  )
}

export default WeatherBox