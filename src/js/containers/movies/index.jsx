import React from "react";
import { connect } from "react-redux";

import { MoviesPage } from "../../components/pages";

import {
  getMovies,
  setFilters,
  resetFilters
} from "../../store/movies/actions";
import { selectMovies, selectFilters } from "../../store/movies/reducer";

class Movies extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      genres: null
    };

    this.onFilterClick = this.onFilterClick.bind(this);
  }

  getGenres() {
    const { movies } = this.props;
    let allGenres = [];

    movies.forEach((movie) => {
      if (movie.genres && movie.genres.length) {
        movie.genres.forEach((category) => {
          if (!allGenres.includes(category)) {
            allGenres.push(category);
          }
        });
      }
    });

    this.setState({
      genres: allGenres
    });
  }

  getFilteredMovies() {
    const { filters, movies } = this.props;

    if (!movies || !movies.length) {
      return [];
    }

    return (
      movies &&
      movies.filter((movie) => {
        // apply genre filter
        if (filters.genre && !movie.genres.find((x) => x === filters.genre)) {
          return false;
        } else if (filters.rate && movie.rate < filters.rate) {
          return false;
        } else if (
          filters.search &&
          !movie.name.toLocaleLowerCase().includes(filters.search)
        ) {
          return false;
        }
        return true;
      })
    );
  }

  onFilterClick(data) {
    const { onSetFilters } = this.props;
    const newFilter = {};
    newFilter[data.key] = data.value;

    onSetFilters(newFilter);
  }

  componentDidMount() {
    const { movies, onLoadMovies } = this.props;
    const { genres } = this.state;

    if (movies && !movies.length) {
      onLoadMovies();
    } else if (!genres) {
      this.getGenres();
    }
  }

  componentDidUpdate(prevProps) {
    const { movies } = this.props;
    const { genres } = this.state;

    if (!genres && movies && movies.length) {
      this.getGenres();
    }
  }

  render() {
    const { history, filters = {}, onResetFilters } = this.props;
    const { genres = [] } = this.state;
    const filteredMovies = this.getFilteredMovies();
    return (
      <MoviesPage
        movies={filteredMovies}
        genres={genres}
        filters={filters}
        onFilterClick={this.onFilterClick}
        onMovieClick={(item) => {
          history.push(`/movies/${item.id}`);
        }}
        onClear={onResetFilters}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: selectMovies(state),
  filters: selectFilters(state)
});

const mapDispatchToProps = (dispatch) => ({
  onLoadMovies: () => dispatch(getMovies()),
  onSetFilters: (data) => dispatch(setFilters(data)),
  onResetFilters: () => dispatch(resetFilters())
});

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
