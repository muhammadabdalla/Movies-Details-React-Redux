import React from "react";
import { connect } from "react-redux";

const MovieDetails = (props) => {
  if (!props.selectedMovie) {
    return (
      <div className="" style={{ width: "70%" }}>
        <h2>Movie</h2>
        <div className="">
          <p>Select movie</p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="" style={{ width: "70%" }}>
        <h2>Movie</h2>
        <div className="">
          <p>title:{props.selectedMovie.title}</p>
          <p>Release Date:{props.selectedMovie.releaseDate}</p>
          <p>rating:{props.selectedMovie.rating}</p>
        </div>
      </div>
    );
  }
};
const mapStateToProps = (state) => {
  return {
    selectedMovie: state.selectedMovie,
  };
};

export default connect(mapStateToProps)(MovieDetails);
