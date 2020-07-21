import APIService from './apiService'

import {
	MOVIE_BASE_URL,
	MOVIE_TRENDING_ENDPOINT,
	MOVIE_SINGLE_ENDPOINT,
} from '../utils/constants'

class MovieAPIService {
	constructor() {
		this.apiService = new APIService(MOVIE_BASE_URL)
		this.apiKey = process.env.REACT_APP_API_KEY
	}

	/**
	 * Makes a request to movie trending endpoint
	 * @returns @todo
	 */
	getTrendingMoviesToday() {
		const queryParams = {
			page: 1,
			api_key: this.apiKey,
		}
		return this.apiService.get(MOVIE_TRENDING_ENDPOINT, queryParams)
	}

	getSingleMovie(id) {
		if (!id) {
			throw new Error('ID must be provided')
		}

		const queryParams = {
			api_key: this.apiKey,
		}

		return this.apiService.get(`${MOVIE_SINGLE_ENDPOINT}/${id}`, queryParams)
	}
}

export default new MovieAPIService()
