import APIService from './apiService'

import { movieConstants } from '../utils/constants'

class MovieAPIService {
	constructor() {
		this.apiService = new APIService(movieConstants.BASE_URL)
		this.apiKey = process.env.REACT_APP_API_KEY
	}

	/**
	 * Makes a request to movie trending endpoint
	 * @returns {Object[]} List of movies trending today
	 */
	getTrendingToday() {
		const queryParams = {
			page: 1,
			api_key: this.apiKey,
		}
		return this.apiService.get(movieConstants.TRENDING_ENDPOINT, queryParams)
	}

	/**
	 * Makes a request to get a single movie
	 * @param {string} id ID of the movie
	 * @returns {Object} Single movie object
	 */
	getSingle(id) {
		if (!id) {
			throw new Error('ID must be provided')
		}

		const queryParams = {
			api_key: this.apiKey,
		}

		return this.apiService.get(
			`${movieConstants.SINGLE_ENDPOINT}/${id}`,
			queryParams,
		)
	}

	/**
	 * Makes a request to get list of movies with search criteria of name
	 * @param {string} name Name of movie
	 * @returns {Object[]} List of movies found by using search criteria
	 */
	getByName(name) {
		if (!name) {
			throw new Error('name must be provided')
		}

		const queryParams = {
			api_key: this.apiKey,
			query: name,
		}

		return this.apiService.get(movieConstants.SEARCH_ENDPOINT, queryParams)
	}
}

export default new MovieAPIService()
