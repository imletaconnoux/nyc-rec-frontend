import React from 'react';

export default class Weather extends React.Component {

  constructor() {
    super()
    this.state = {
      local_date_time: "",
      temp: "",
      feels_like: "",
      weather: "",
      icon: "",
      humidity: "",
      wind: ""

    }
  }


  componentDidMount(){
    fetch('http://api.wunderground.com/api/b39799c1a72fa45f/conditions/q/NY/New_York.json')
    .then((resp) => resp.json())
    .then((data) => this.setState({
      local_date_time: data.current_observation.local_time_rfc822,
      temp: data.current_observation.temperature_string,
      feels_like: data.current_observation.feelslike_string,
      weather: data.current_observation.weather,
      icon: data.current_observation.icon_url,
      humidity: data.current_observation.relative_humidity,
      wind: data.current_observation.wind_string
    }))

  }

  render() {
    return(
      <div>
        <h1><iframe src={this.state.icon} width="50" height="50" frameBorder="0"/> Weather for New York, NY <iframe src={this.state.icon} width="50" height="50" frameBorder="0"/> </h1>
        <p>Date and Time: {this.state.local_date_time}</p>

        <p>Temperature: {this.state.temp} & {this.state.weather} </p>
        <p>It feels like: {this.state.feels_like}</p>
        <p>Humidity {this.state.humidity}</p>
        <p>Wind: {this.state.wind}</p>
      </div>
    )
  }

}
