import React from "react";
import Img from "./Img";

function Card({ movie }) {
  return (
    <div className="card">
      <Img path={movie.poster_path} title={movie.title} />
      <p>{movie.title}</p>
    </div>
  );
}

export default Card;
