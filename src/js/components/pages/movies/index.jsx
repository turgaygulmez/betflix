import React from "react";
import MovieCard from "../../organisms/movieCard";

const MoviesPage = ({ movies }) => {
  return (
    <div class="all-movies">
      <div class="movie-filters"></div>
      <div className="movie-card-list">
        {movies &&
          movies.map((item, idx) => {
            return <MovieCard key={idx} movie={item} />;
          })}
      </div>
    </div>
  );
};

export default MoviesPage;
