import React from 'react'

import CardImage from '../../components/cardImage'

import './CardPage.css'

const CardPage = (props) => {
	const {
		path,
		title,
		releaseDate,
		movieLength,
		description,
		genres,
		rating,
	} = props

	const getGenre = (genreList) => {
		return genreList
			.map((genre) => {
				return genre.name
			})
			.join(', ')
	}

	return (
		<div className="card-page-wrapper">
			<div className="card-page-poster">
				<CardImage path={path} title={title} handleClick={null} />
			</div>
			<div className="card-page-description">
				<div className="card-description-wrapper-row">
					<span className="card-label">Title</span>
					<span className="card-value">{title}</span>
				</div>
				<div className="card-description-wrapper-row">
					<span className="card-label">Release Date</span>
					<span className="card-value">{releaseDate}</span>
				</div>
				<div className="card-description-wrapper-row">
					<span className="card-label">Length</span>
					<span className="card-value">{movieLength} Minutes</span>
				</div>
				<div className="card-description-wrapper-row">
					<span className="card-label">Genre</span>
					<span className="card-value">{getGenre(genres)}</span>
				</div>
				<div className="card-description-wrapper-column">
					<span className="card-movie-description-label">
						What's this about?
					</span>
					<span className="card-value">{description}</span>
				</div>
				<div className="card-description-wrapper-row">
					<span className="card-label">Rating</span>
					<span className="card-value">{rating}</span>
				</div>
			</div>
		</div>
	)
}

export default CardPage
