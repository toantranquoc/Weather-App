import './App.css';
import React, {Component} from 'react'
import DetailWeather from './Components/DetailWeather/DetailWeather'
import MainWeather from './Components/MainWeather/MainWeather'
import PageNotFound from './Components/PageNotFound/PageNotFound'
import { Switch, Route, Link } from 'react-router-dom';

class App extends Component {
  render(){
    return (
      <div>
        <Switch>
        <Route path="/" exact component={MainWeather}></Route>
        <Route path="/detail/:id" exact component={DetailWeather}></Route>
        <Route render={() => <PageNotFound></PageNotFound>}></Route>
        </Switch>

      </div>
    );
  }

}

export default App;
