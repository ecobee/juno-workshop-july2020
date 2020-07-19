import React from "react";

const CardImage = ({ path, title, handleClick }) => {
  return (
    <img
      className="image"
      src={`https://image.tmdb.org/t/p/original${path}`}
      alt={title}
      loading="lazy"
      width="100%"
      height="100%"
      onClick={handleClick}
    />
  );
}

export default CardImage;
