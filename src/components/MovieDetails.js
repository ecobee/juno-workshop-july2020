import React from "react";

function MovieDetails() {
  return (
    <div className="MovieDetails">
      <div className="DetailsImg">{`<Insert Poster Here>`}</div>
      <div className="DetailsInfo">
        <h1>{`<Insert Movie Title>`}</h1>
        <p>{`<Insert Movie Details>`}</p>
      </div>
    </div>
  );
}

export default MovieDetails;
