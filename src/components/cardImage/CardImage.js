import React from 'react'
import './CardImage.css'

const CardImage = ({ path, title, handleClick }) => {
	if (!path) {
		return (
			<div>
				<span>Image not found.</span>
			</div>
		)
	}
	return (
		<img
			className="card-image"
			src={`https://image.tmdb.org/t/p/original${path}`}
			alt={title}
			loading="lazy"
			width="100%"
			height="100%"
			onClick={handleClick}
		/>
	)
}

export default CardImage
