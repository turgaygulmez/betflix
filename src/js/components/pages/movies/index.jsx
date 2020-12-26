import React from "react";
import MovieCard from "../../organisms/movieCard";

const MoviesPage = ({ movies, onMovieClick }) => {
  return (
    <div className="all-movies">
      <div className="movie-filters"></div>
      <div className="movie-card-list">
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
