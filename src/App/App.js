import axios from 'axios';
import React from 'react';
import Weather from './Weather'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: '',
      lon: '',
      showLoc: false,
      weatherData: '',
      hasWeatherData : false
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
      let cityInfo = await axios.get(url);
      
      this.setState({
        lat: cityInfo.data[0].lat,
        lon: cityInfo.data[0].lon,
        showLoc: true
      })
  
      let weatherUrl = `${process.env.REACT_APP_SERVER}/weather?city_name=${this.state.city}`;
      let searchedCityWeather = await axios.get(weatherUrl);
      this.setState({
        hasWeatherData : true,
        weatherData : searchedCityWeather
      })
    }
    catch {

    }
  }

  cityChange = (e) => {
    this.setState({
      city: e.target.value
    });
  }



  render() {
    console.log()
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.handleCitySubmit}>
          <label htmlFor="cityName">Pick a City</label>
          <input type="text" id="cityName" onChange={this.cityChange}></input>
          <button type="submit">Explore!</button>
        </form>
        {this.state.showLoc &&
          (<>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">City</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{this.state.city}</td>
                  <td>{this.state.lat}</td>
                  <td>{this.state.lon}</td>
                </tr>
              </tbody>
            </table>
            <img src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATION_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`} alt="map" />
            <Weather
              hasTheWeatherData = {this.state.hasWeatherData}
              weather = {this.state.weatherData}>
            </Weather>
          </>)
        }
      </>
    );
  };
};

export default App;
