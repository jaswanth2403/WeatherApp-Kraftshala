import React, { useState } from 'react';
import axios from 'axios';
import WeatherItem from './components/WeatherItem';
import './App.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [locationsList, setLocationsList] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addLocation = async event => {
    event.preventDefault();
    if (location && !locationsList.includes(location)) {
      setLocationsList([...locationsList, location]);
      fetchWeather(location);
      setLocation('');
    }
    else{
      alert("Please enter a valid location");
    }
  };

  const fetchWeather = async location => {
    const API_KEY = '53ff8e9832f87311758c387358107e3a'; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      const weather = response.data;
      setWeatherData(prevWeatherData => ({
        ...prevWeatherData,
        [location]: weather,
      }));
    } catch (error) {
      alert(`Failed to fetch weather data for ${location}`);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`container-${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="title-container">
          <h1 className="heading">WEATHER APP</h1>
          <button onClick={toggleDarkMode} className={`toggle-mode-button-${isDarkMode ? 'Light-Mode' : 'Dark-Mode'} `}>
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
      </div>
        <div>
          <form className="location-form-container" onSubmit={addLocation}>
            <input
              value={location}
              onChange={e => setLocation(e.target.value)}
              className="input"
              placeholder="Enter city name or zip code"
            />
            <button type="submit" className="button">
              Add Location
            </button>
          </form>
        </div>
     
            <ul className="locations-list">  
              {locationsList.map(eachLocation => (
                <WeatherItem
                  key={eachLocation}
                  location={eachLocation}
                  weatherData={weatherData[eachLocation]}
                />
              ))}
            </ul>
    
    </div>
  );
};

export default App;
