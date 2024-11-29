import { useEffect, useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';

import {ClipLoader} from "react-spinners";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('');

  let [loading, setLoading] = useState(false);

  const cityList = ["Kwangmyŏng", "New York", "Paris"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  }

  const getWeatherByCity = async () => {
    //https://openweathermap.org/current
    let url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${API_KEY}`

    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  }

  const handleCityChange = (city) => {
      setCity(city);
  };

  //현재위치 기반의 날씨를 가져온다.
  useEffect(()=>{
    /*
    상황에 따라 get~선택해서 불러온다.
    getWeatherByCity("") 처음 호출 시, 도시이름이 없어 오류를 발생시킨다. 
    */
    if(city===""){
      setLoading(true)
      getCurrentLocation();
    } else {
      setLoading(true)  
      getWeatherByCity();
    }      
  }, [city]);

  return (
    <div>
      <div className='contenter-box'>
        {
          loading ? (
            <ClipLoader
              color="#f88c6b"
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )
          : (
            <div className='weather-box'>
              <WeatherBox weather={weather} />
              <WeatherButton cityList={cityList} 
                selectedCity={city}
                handleCityChange={handleCityChange} />
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
