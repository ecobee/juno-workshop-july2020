import React from 'react'
import ReactModal from 'react-modal'

import CardContainer from '../card-container'

import HomePage from '../../pageComponents/HomePage'
import GenericErrorPage from '../../pageComponents/GenericErrorPage'

import Search from '../../components/search'

import movieApiService from '../../services/movieApiService'

export default class HomeContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			error: null,
			isLoading: true,
			movies: [],
			showMovieDetailsModal: false,
			currentMovieId: null,
		}
	}

	async componentDidMount() {
		try {
			const response = await movieApiService.getTrendingToday()

			this.setState({
				isLoading: false,
				movies: response.results,
			})
		} catch (e) {
			this.setState({
				error: e,
				isLoading: false,
			})
		}
	}

	handleOpenMovieModal = (movieId) => {
		this.setState({ showMovieDetailsModal: true, currentMovieId: movieId })
	}

	handleCloseMovieModal = () => {
		this.setState({ showMovieDetailsModal: false })
	}

	handleSearch = async (movieName) => {
		try {
			this.setState({
				isLoading: true,
			})

			const response = await movieApiService.getByName(movieName)

			this.setState({
				isLoading: false,
				movies: response.results,
			})
		} catch (e) {
			this.setState({
				error: e,
				isLoading: false,
			})
		}
	}

	render() {
		const { isError, isLoading, movies, currentMovieId } = this.state
		const hasMovies = movies && movies.length > 0

		return (
			<>
				<>
					{isLoading && <div>Loading...</div>}
					{isError && (
						<GenericErrorPage description="Oh no! An error has occurred" />
					)}
					<div>
						<Search onSubmit={this.handleSearch} />
					</div>
					{!isLoading && !isError && hasMovies && (
						<>
							<HomePage
								movies={movies}
								onCardClick={this.handleOpenMovieModal}
								onSearchClick={this.handleSearch}
							/>
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
					{!isLoading && !isError && !hasMovies && (
						<GenericErrorPage description="Movies could not be found. Try again." />
					)}
				</>
			</>
		)
	}
}
