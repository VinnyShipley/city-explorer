import React from "react";
import Table from 'react-bootstrap/Table';


class Weather extends React.Component {
  render() {
    return (
      <Table
        striped
        bordered
        hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Forecast</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{this.props.weather.description}</td>
            {/* <td>{this.props.weather.}</td>
          </tr>
          <tr>
            <td>{this.props.weather.data[1].date}</td>
            <td>{this.props.weather[1].description}</td>
          </tr>
          <tr>
            <td>{this.props.weather[2].date}</td>
            <td>{this.props.weather[2].description}</td> */}
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default Weather;