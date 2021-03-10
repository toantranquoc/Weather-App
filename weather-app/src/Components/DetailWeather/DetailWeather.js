import React from 'react';
import './DetailWeather.css'
class DetailWeather extends React.Component {
    componentDidMount(){
        console.log(this.props);
    }
    render(){
        return(
            <div className="box">Hello from Detail Weather - {this.props.match.params.id}</div>
        );
    }

}
export default DetailWeather;