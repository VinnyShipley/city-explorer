import axios from 'axios';
import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      city: ''
    }
  }

  handleCitySubmit = async (e) => {
    e.preventDefault();
    let url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=${this.state.city}&format=json`;
    let cityInfo = await axios.get(url);
    console.log(cityInfo[0]);
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
          <button type="submit">Display City Data</button>
        </form>
      </>
    );
  };
};

export default App;
