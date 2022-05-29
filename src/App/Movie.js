import React from "react";
import Carousel from 'react-bootstrap/Carousel';

class Movie extends React.Component {
  render() {
    let passedMovieData = this.props.hasMovieData;
    console.log(this.props.movieData)
    if (passedMovieData === true) {
    return (
      <Carousel>
        {this.props.movieData.map((i) => {

          <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
      />
    <Carousel.Caption>
      <h3>`{this.props.movieData[i.title]}`</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
    })}
  </Carousel>
    )
  }
    else {
      <p>nope</p>
    }  
  }
}

export default Movie;