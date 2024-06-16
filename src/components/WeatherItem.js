import React from 'react';
import moment from 'moment';
import './weather.css'

const WeatherItem = ({ location, weatherData }) => {
  if (!weatherData) {
    return <p className="invalid-weather-data">There is no weather details for  {location}... <br/> Location is Invalid OR Not Found</p>;
  }

  // Round temperature value
  const roundedTemp = Math.round(weatherData.main.temp-273.15);
  const roundedHumidity = Math.round(weatherData.main.humidity);
  const roundedWindSpeed = Math.round(weatherData.wind.speed);
 

  return (
    <div className="weather-data">
      <h2>
        {weatherData.name}, {weatherData.sys.country}
      </h2>
      <p>Temperatures : {roundedTemp} °C</p>
      <p>Humidity  : {roundedHumidity} %</p>
      <p>Wind Speed  : {roundedWindSpeed} m/s</p>
      <p>conditions  : {weatherData.weather[0].description}</p>
      <p>{moment().format('MMMM Do YYYY , h:mm:ss a')}</p>
    </div>
  );
};

export default WeatherItem;
