import React, { Component } from 'react'
import Weather from "./Components/Weather";
import Form from './Components/Form';

const API_Key = '877143fc8fa97ee845c95f18c4d2f95b';
 class App extends Component {

  state = {
    Tempreature: '',
    city : '' ,
    country : '',
    humidity : '',
    description : '',
    error : '',

  }

ShowWeather = async (e) => {
  e.preventDefault();
  const country = e.target.elements.country.value;
  const city = e.target.elements.city.value;
  console.log(country , city);
  const API = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${API_Key}`)
  const data = await API.json();
  console.log(data);
  if (city && country ) {
    this.setState({
      Tempreature: data.main.temp,
      city : data.name ,
      country : data.sys.country,
      humidity : data.main.humidity,
      description : data.weather[0].description,
      error : '',
  
    })
  } else {
    this.setState({
      Tempreature: '',
      city : '' ,
      country : '',
      humidity : '',
      description : '',
      error : 'Please Enter Valid Data',
    })
  }
  
}
  render() {
    return (
      <div className='App'> 
      <div className='Form-container'>
      <h2>Weather App</h2>
      <Form ShowWeather={this.ShowWeather}/> 
      <Weather 
      Tempreature = {this.state.Tempreature}
      city  = {this.state.city} 
      country  = {this.state.country}
      humidity  = {this.state.humidity}
      description  = {this.state.description}
      error  = {this.state.error}
      /> 
      </div>
            
      </div>
    )
  }
}


export default App;
