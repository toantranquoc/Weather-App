import React, {Component} from 'react'
import DisplayWeather from '../DisplayWeather/DisplayWeather'
import SearchBox from '../SearchBox/SearchBox'
import NotFound from '../NotFound/NotFound'
import axios from 'axios'
import './MainWeather.css'
import {connect} from 'react-redux'
const API_Key = '08c9e11493ab1f2d38450a6b3e80d6de';
class MainWeather extends Component{
    constructor(){
        super();
        this.state = {
          unit: "metric",
          city: null,
          error: true,
          weather: {}
        }
      }
    
      componentDidMount(){
        this.getWeather();
      }
      getWeather = async () => {
          axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&lang=vi&units=${this.state.unit}&appid=${API_Key}`)
          .then(res => {
            const data = res.data;
            this.setState({
              weather: data,
              error: false
            })
          })
          .then(() => {
            this.props.onGetWeatherData(this.state.weather)
          })
          .catch((error) => 
            this.setState({
              error: true
            })
          );
      }
      handleSearch =  value => {
        let temp = value.toString().replace(/\s/g, "");
        this.setState({
          city: temp
        }, () => this.getWeather());
      }
    render(){
        let result = null;
        if(this.state.city != null) {
          result = this.state.error ? <NotFound>Tên địa điểm không phù hợp!</NotFound> : <DisplayWeather weather={this.state.weather}/>
        }
        return(
            <div className="MainWeather">
                <h1> DỰ BÁO THỜI TIẾT</h1>
                <SearchBox onSearch={this.handleSearch}></SearchBox>
                {result}
            </div>

        );
    }
}
const mapStateToProps = (state) => {
      return {
        weatherState: state.weather
      }
}

const mapDispatchToProps = (dispatch) => {
      return {
          onGetWeatherData: (data) => dispatch({type: 'GET_WEATHER', weather: data})
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainWeather);