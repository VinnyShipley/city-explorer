import axios from 'axios';
import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: '',
      lat: '',
      lon: ''
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url);
    console.log(cityInfo.data[0]);
    this.setState({
      lat: cityInfo.data[0].lat,
      lon: cityInfo.data[0].lon
    })
  }

  cityChange = (e) => {
    e.preventDefault();
    this.setState({
      city: e.target.value
    });
  }



  render() {
    return (
      <>
        <h1>City Explorer</h1>
        <form onSubmit={this.handleCitySubmit}>
          <label htmlFor="cityName">Pick a City</label>
          <input type="text" id="cityName" onChange={this.cityChange}></input>
          <button type="submit">Explore!</button>
        </form>
        <h2>City: {this.state.city}</h2>
        <h2>Latitude: {this.state.lat}</h2>
        <h2>Longitude: {this.state.lon}</h2>
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
      </>
    );
  };
};

export default App;
