import React from "react";
// import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component {
  render() {
    let passedMovieData = this.props.hasMovieData;
    console.log(this.props.hasMovieData)
    if (passedMovieData === true) {
    return (
      <p>{console.log(this.props.hasMovieData)}</p>
    )
  }
    else {
      <p>nope</p>
    }  
  }
}

export default Movie;