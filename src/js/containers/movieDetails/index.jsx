import React from "react";
import { connect } from "react-redux";

import { MovieDetailsPage } from "../../components/pages";

import { getMovies } from "../../store/movies/actions";
import { selectMovies } from "../../store/movies/reducer";

class MovieDetails extends React.PureComponent {
  componentDidMount() {
    const { movies, onLoadMovies } = this.props;

    if (movies && !movies.length) {
      onLoadMovies();
    }
  }

  render() {
    const { movies = [], match = {} } = this.props;
    const { params = {} } = match;
    const id = parseInt(params.id);

    const selectedMovie =
      movies && movies.length && id ? movies.find((x) => x.id === id) : {};

    return <MovieDetailsPage movie={selectedMovie} />;
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
