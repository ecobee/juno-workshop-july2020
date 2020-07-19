import React from "react";

import CardImage from '../cardImage'

const Card = ({ movie, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <h3>{movie.title}</h3>
      <h4>({movie.release_date})</h4>
      <CardImage
        path={movie.poster_path}
        title={movie.title}
        vote={movie.vote_average}
        date={movie.release_date}
      />
      <span>
        <div className="card-ratings">
          <span>
          {movie.vote_average}
          </span>
          <svg height="20" width="23" class="star rating" data-rating="1">
            <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
          </svg>
        </div>
      </span>
    </div>
  );
}

export default Card;
