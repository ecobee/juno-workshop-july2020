import React from "react";
import CardImage from "../cardImage";

const MovieDetails = ({ selectedMovie }) => {
  const {
    poster_path,
    overview,
    genres,
    runtime,
    release_date,
    vote_average,
    imdb_id,
    title,
  } = selectedMovie;

  return (
    <div>
      <CardImage path={poster_path} title={title} />
      <ul>
        <li>Description: {overview}</li>
        <li>Length: {runtime} minutes</li>
        <li>Release Date: {release_date}</li>
        <li>Rating: {vote_average}</li>
        <li>
          {" "}
          <a href={`https://imdb.com/title/${imdb_id}`}>IMDB link</a>
        </li>
        <li>Genres: {genres.map(({ name }) => name).join(", ")}</li>
      </ul>
    </div>
  );
};

export default MovieDetails;
