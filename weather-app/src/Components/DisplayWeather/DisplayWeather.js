import React from 'react'
import {Button} from 'antd'
import './DisplayWeather.css'
import {Link} from 'react-router-dom'

const DisplayWeather = (props) => {
    const dateBuilder = (d) => {
        let months = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
        let days = ["Chủ Nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
    
        let day = days[d.getDay()];
        let date = d.getDate();
        let month = months[d.getMonth()];
        let year = d.getFullYear();
    
        return `${day}, Ngày ${date} ${month} ${year}`
      }
      let id = props.id;
    return (
        <div className="container">
          <div className="location-box">
            <div className="location">{props.weather.name}, {props.weather.sys.country}</div>
            <div className="date">{dateBuilder(new Date())}</div>
          </div>
          <div className="weather-box">
            <div className="title">Nhiệt độ</div> 
            <div className="temp">
              {Math.round(props.weather.main.temp)}°c
            </div>
            <div className="weather">{props.weather.weather[0].description}</div>
          </div>
          <Button type="link" className="detail"><Link to={{
            pathname: `/detail/${props.weather.id}`
          }}>Nhấn để xem chi tiết</Link></Button>
        </div>
    );
}
export default DisplayWeather;