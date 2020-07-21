import React from 'react'

import movieApiService from '../../services/movieApiService'

import CardPage from '../../pageComponents/CardPage'

class CardContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			movie: null,
			isLoading: false,
			isError: false,
		}
	}

	async componentDidMount() {
		const { movieId } = this.props
		this.setState({
			isLoading: true,
		})
		try {
			const response = await movieApiService.getSingleMovie(movieId)
			this.setState({
				isLoading: false,
				movie: response,
			})
		} catch (e) {
			this.setState({
				isLoading: false,
				isError: true,
			})
		}
	}

	render() {
		const { movie, isLoading, isError } = this.state
		return (
			<>
				{isLoading && <div>Loading...</div>}
				{isError && <div>Error occurred! Oh noes!</div>}
				{!isLoading && !isError && movie && (
					<CardPage
						title={movie.title}
						path={movie.poster_path}
						releaseDate={movie.release_date}
						description={movie.overview}
						movieLength={movie.runtime}
						genres={movie.genres}
						rating={movie.vote_average}
					/>
				)}
			</>
		)
	}
}

export default CardContainer
