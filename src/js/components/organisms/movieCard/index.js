import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div
        className="movie-card__header"
        style={{
          backgroundImage: `url(images/movie-covers/${movie.img})`
        }}
      />

      <div className="movie-card__content">
        <div className="movie-card__content__head">
          <h3 className="movie-card__content__head__title">{movie.name}</h3>
        </div>
        <div className="movie-card__content__info">
          <div className="movie-card__content__info__section">
            <label>Rate</label>
            <span>{movie.rate}/10</span>
          </div>
          <div className="movie-card__content__info__section">
            <label>Length</label>
            <span className="movie-card__content__info__section--right">
              {movie.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
