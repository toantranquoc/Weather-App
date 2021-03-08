import './App.css';
import React, {Component} from 'react'
import axios from 'axios'
import DisplayWeather from './Components/DisplayWeather'
import SearchBox from './Components/SearchBox'
const API_Key = '08c9e11493ab1f2d38450a6b3e80d6de';

class App extends Component {
  constructor(){
    super();
    this.state = {
      unit: "metric",
      temparature: "3",
      city: "",
      country: "",
      humidity: "",
      pressure: "",
      icon:"",
      description: "",
      error: false
    }
  }

  componentDidMount(){
    this.getWeather();
  }
  getWeather = async () => {
      axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&lang=vi&units=${this.state.unit}&appid=${API_Key}`)
      .then(res => {
        const data = res.data;
        console.log(data);
        this.setState({
          unit: data.unit,
          error: false
        })
      }).catch((error) => 
        this.setState({
          error: true
        })
      );
  
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=${this.state.unit}&appid=${API_Key}`);
    // const response = await api_call.json();
  }
  handleSearch =  value => {
    let temp = value.toString().replace(/\s/g, "");
    this.setState({
      city: temp
    }, () => this.getWeather());
    console.log(this.state);
  }

  render(){
    let result = this.state.error ? <p>Tên thành phố không phù hợp! Vui lòng nhập lại</p> : <DisplayWeather/>
    return (
      <div className="App">
        <h1> Dự báo thời tiết</h1>
        {result}
        <SearchBox onSearch={this.handleSearch}></SearchBox>
      </div>
    );
  }

}

export default App;
