import React from "react";
import MovieCard from "../../organisms/movieCard";
import FilterList from "../../molecules/filterList";

const MoviesPage = ({
  movies,
  filters,
  genres,
  onFilterClick,
  onMovieClick,
  onClear
}) => {
  return (
    <div className="all-movies">
      <FilterList
        genres={genres}
        filters={filters}
        onFilterClick={onFilterClick}
        onClear={onClear}
      />
      <div className="movie-card-list">
        {movies && movies.length === 0 && (
          <p className="movie-card-list__empty">
            We could not find any movie with your filter
          </p>
        )}

        {movies &&
          movies.map((item, idx) => {
            return (
              <MovieCard key={idx} movie={item} onMovieClick={onMovieClick} />
            );
          })}
      </div>
    </div>
  );
};

export default MoviesPage;
