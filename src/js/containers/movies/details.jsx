import React from "react";
import { connect } from "react-redux";

import { MoviesPage } from "../../components/pages";

import { getMovies } from "./actions";
import { selectMovies } from "./reducer";

class MovieDetails extends React.PureComponent {
  componentDidMount() {
    const { movies, onLoadMovies } = this.props;

    if (movies && !movies.length) {
      onLoadMovies();
    }
  }

  render() {
    const { movies = [] } = this.props;
    return <MoviesPage movies={movies} />;
  }
}

const mapStateToProps = (state) => {
  return {
    movies: selectMovies(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  onLoadMovies: () => dispatch(getMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieDetails);
