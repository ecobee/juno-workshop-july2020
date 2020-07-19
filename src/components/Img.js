import React from "react";

function Img({ path, title, id }) {
  return (
    <img
      className="image"
      src={`https://image.tmdb.org/t/p/original${path}`}
      alt={title}
      loading="lazy"
      width="100%"
      height="100%"
    />
  );
}

export default Img;
