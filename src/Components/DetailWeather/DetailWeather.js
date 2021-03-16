import React from 'react';
import {useSelector} from 'react-redux'
import './DetailWeather.css'
import { LeftOutlined } from '@ant-design/icons';
import { Button} from 'antd';

const DetailWeather = (props) => {

    const weather = useSelector(state => state.weather);

    const onClickBackHandler = () => {
      props.history.goBack();
    }

    return (
      <div className="displayweather">
          <div className="maincard">
            <span className="cardtitle">
              <h2>{weather.name} , {weather.sys.country}</h2>
            </span>
            <h1 style={{color: 'red'}}>
              {" "}
              {Math.floor(weather.main.temp)}
              <sup>o</sup>C
            </h1>
            <span className="weather-main">{weather.weather[0].main}</span>
            <img className="weather-icon" src={"http://openweathermap.org/img/w/" +`${weather.weather[0].icon}` +".png"} alt="Thời tiết"/>
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
                    <h4>Cao nhất/Thấp nhất</h4>
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
                    <h4>Tầm nhìn </h4>
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
                    <h4>Bình Minh </h4>
                  </td>
                  <td>
                    <span>
                      {new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>Hoàng Hôn</h4>
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

          <Button onClick={onClickBackHandler} type="primary" icon={<LeftOutlined />}>
            Về trang chủ
          </Button>
        </div>
    );
}
export default DetailWeather;