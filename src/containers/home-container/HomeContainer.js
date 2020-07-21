import React from 'react'
import ReactModal from 'react-modal'

import HomePage from '../../pageComponents/HomePage'

import CardContainer from '../card-container'

import movieApiService from '../../services/movieApiService'

export default class HomeContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoaded: false,
			movies: [],
			showMovieDetailsModal: false,
			currentMovieId: null,
		}
	}

	async componentDidMount() {
		try {
			const response = await movieApiService.getTrendingMoviesToday()

			this.setState({
				isLoaded: true,
				movies: response.results,
			})
		} catch (e) {
			this.setState({
				error: e,
				isLoaded: true,
			})
		}
	}

	handleOpenMovieModal = (movieId) => {
		this.setState({ showMovieDetailsModal: true, currentMovieId: movieId })
	}

	handleCloseMovieModal = () => {
		this.setState({ showMovieDetailsModal: false })
	}

	render() {
		const { error, isLoaded, movies, currentMovieId } = this.state
		const hasMovies = movies && movies.length > 0
		return (
			<>
				{error && <div>Error: {error.message}</div>}
				{!isLoaded && <div>Loading...</div>}
				{isLoaded && !error && hasMovies && (
					<>
						<HomePage movies={movies} onCardClick={this.handleOpenMovieModal} />
						<ReactModal
							isOpen={this.state.showMovieDetailsModal}
							// gets called for closing the modal via esc / other keys
							onRequestClose={this.handleCloseMovieModal}
							ariaHideApp={false}
						>
							<button onClick={this.handleCloseMovieModal}>X</button>
							<CardContainer movieId={currentMovieId} />
						</ReactModal>
					</>
				)}
			</>
		)
	}
}
