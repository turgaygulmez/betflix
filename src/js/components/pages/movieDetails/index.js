import React from "react";
import TagList from "../../molecules/tagList";

const MovieDetailsPage = ({ movie }) => {
  return (
    <div className="movie-details">
      <div className="movie-details__trailer">
        <iframe
          title={movie.name}
          className="responsive-iframe"
          src={movie.trailer}
        ></iframe>
      </div>
      <div className="movie-details__card">
        <img
          className="movie-details__card__cover"
          alt="cover"
          src={`${process.env.PUBLIC_URL}/images/movie-covers/${movie.img}`}
        />
        <div className="movie-details__card__info">
          <h1 className="movie-details__card__info__title">{movie.name}</h1>
          <div>
            <span className="movie-details__card__info__meta">
              {movie.length}
            </span>
            <span className="movie-details__card__info__meta">
              {movie.rate}/10
            </span>
          </div>
          <div className="movie-details__card__info__tags">
            <TagList tags={movie.genres} />
          </div>
          <div>{movie.description}</div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsPage;
