import React, {useState, useEffect} from 'react';
import './DetailWeather.css'
import axios from 'axios'

const API_Key = '08c9e11493ab1f2d38450a6b3e80d6de';

const DetailWeather = () => {
    const [weather, setWeather] = useState({});
    useEffect(() => {
        const id = localStorage.getItem('idCountry');
        console.log(id);
        const getWeatherData = async () => {
            axios.get(`http://api.openweathermap.org/data/2.5/weather?id=${id}&lang=vi&units=metric&appid=${API_Key}`)
            .then(res => {
              const data = res.data;
              setWeather(data);  
            })
        }
        getWeatherData();

    }, [weather]);

    return (
      <div className="displayweather">
          <div className="maincard">
            <span className="cardtitle">
              <h2>{weather.name} , {weather.sys.country}</h2>
            </span>
            <h1>
              {" "}
              {Math.floor(weather.main.temp)}
              <sup>o</sup>C
            </h1>
            <span className="weather-main">{weather.weather[0].main}</span>
            <img className="weather-icon" src={null} alt="" srcset="" />
            <span className="weather-description">
              {" "}
              {weather.weather[0].description}
            </span>
          </div>
          <div className="weatherdetails">
            <div className="section1">
              <table>
                <tr>
                  <td>
                    <h4>Nhiệt độ cao nhất/Thấp nhất</h4>
                  </td>
                  <td>
                    <span>
                      {Math.floor(weather.main.temp_max)}/
                      {Math.floor(weather.main.temp_min)}
                      <sup>o</sup>C
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Độ ẩm</h4>
                  </td>
                  <td>
                    <span>{weather.main.humidity} %</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Áp suất</h4>
                  </td>
                  <td>
                    <span>{weather.main.pressure} hPa</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Tầm nhìn: </h4>
                  </td>
                  <td>
                    <span>{weather.visibility / 1000} Km</span>
                  </td>
                </tr>
              </table>
            </div>

            <div className="section2">
              <table>
                <tr>
                  <td>
                    <h4>Gió</h4>
                  </td>
                  <td>
                    <span>{Math.floor((weather.wind.speed * 18) / 5)} km/giờ</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Hướng Gió</h4>
                  </td>
                  <td>
                    <span>
                      {weather.wind.deg}
                      <sup>o</sup> deg
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Bình Minh: </h4>
                  </td>
                  <td>
                    <span>
                      {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Hoàng Hôn:</h4>
                  </td>
                  <td>
                    <span>
                      {new Date(weather.sys.sunset * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
    );
}
export default DetailWeather;