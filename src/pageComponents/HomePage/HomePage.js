import React from "react";

import Card from '../../components/card'
import Search from '../../components/search'

import './HomePage.css'

const HomePage = (props) => {
  const { movies, onCardClick } = props
  
  return (
    <div className="home-page">
      <Search />
      <div className="home-page-content">
        <div className="card-container">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} onClick={() => onCardClick(movie.id)}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomePage

