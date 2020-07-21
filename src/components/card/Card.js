import React from "react";

import CardImage from "../cardImage";

import "./Card.css";

const Card = ({ movie, onClick }) => {
  return (
    <div className="card">
      <h3 className="card-movie-title">{movie.title}</h3>
      <CardImage
        path={movie.poster_path}
        title={movie.title}
        vote={movie.vote_average}
        date={movie.release_date}
        handleClick={onClick}
      />
      <div className="card-ratings">
        <span className="card-ratings-rating">{movie.vote_average}</span>
        <svg height="20" width="23" className="star rating" data-rating="1">
          <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
