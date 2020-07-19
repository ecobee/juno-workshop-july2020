import React from "react";

import Card from '../../components/card/Card'

const HomePage = (props) => {
  const { movies, onCardClick } = props
  
  return (
    <div className="home-page">
      <div className="card-container">
        {movies.map((movie) => (
          <Card key={movie.id} movie={movie} onClick={() => onCardClick(movie.id)}/>
        ))}
      </div>
    </div>
  )
}

export default HomePage

