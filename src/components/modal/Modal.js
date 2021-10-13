import React from "react";
import { MOVIE_BASE_URL } from "../../utils/constants";
import "./Modal.css";


export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: {},
            isLoaded: false,
            error: null,
        };
    }
    async componentDidMount() {
        try {
            const movieTrendingUrl = `${MOVIE_BASE_URL}/movie/${this.props.movieId}`;
            const responsePromise = await fetch(movieTrendingUrl, {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
                    "Content-Type": "application/json;charset=utf-8",
                },
            });
            const response = await responsePromise.json();
            console.log(response)
            this.setState({
                movie: response,
                isLoaded: true,
            })

        } catch (e) {
            this.setState({
                error: e,
                isLoaded: true,
            });
        }
    }

    render() {
        const { error, isLoaded, movie } = this.state;
        return (
            <>
                {error && <div>Error: {error.message}</div>}
                {!isLoaded && <div>Loading...</div>}
                {isLoaded && !error && movie && (
                    <div className="modal-container">
                        <img className="img-modal" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />

                        <div className="info-modal">
                            <h1> {movie.title}</h1 >

                            <span>{movie.tagline}</span>
                            <br />
                            <span>Rating: {movie.vote_average}/10</span>
                            <br />
                            {movie.overview}
                        </div>
                    </div>)}
            </>
        );
    }
}

