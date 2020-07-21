import React from "react";
import ReactModal from "react-modal";

import HomePage from "../../pageComponents/HomePage";
import MovieDetails from "../../components/movieDetails";

import { MOVIE_BASE_URL } from "../../utils/constants";

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      movies: [],
      showMovieDetailsModal: false,
      selectedMovie: null,
    };
  }

  async componentDidMount() {
    try {
      const movieTrendingUrl = `${MOVIE_BASE_URL}/trending/movie/day?page=1&api_key=${process.env.REACT_APP_API_KEY}`;
      const responsePromise = await fetch(movieTrendingUrl, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const response = await responsePromise.json();

      this.setState({
        isLoaded: true,
        movies: response.results,
      });
    } catch (e) {
      this.setState({
        error: e,
        isLoaded: true,
      });
    }
  }

  getMovieDetails = async (id) => {
    try {
      const movieDetailsUrl = `${MOVIE_BASE_URL}/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;
      const responsePromise = await fetch(movieDetailsUrl, {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      });
      const response = await responsePromise.json();

      this.setState({
        selectedMovie: response,
      });
    } catch (e) {
      this.setState({
        error: e,
      });
    }
  };

  handleOpenMovieModal = (id) => {
    // fetch movie info
    this.getMovieDetails(id);
    // open modal
    this.setState({ showMovieDetailsModal: true });
  };

  handleCloseMovieModal = () => {
    this.setState({ showMovieDetailsModal: false, selectedMovie: null });
  };

  render() {
    const { error, isLoaded, movies, selectedMovie } = this.state;
    const hasMovies = movies && movies.length > 0;
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
              appElement={document.getElementById("root")}
            >
              <>
                <button onClick={this.handleCloseMovieModal}>X</button>
                {selectedMovie && (
                  <MovieDetails selectedMovie={selectedMovie} />
                )}
              </>
            </ReactModal>
          </>
        )}
      </>
    );
  }
}
