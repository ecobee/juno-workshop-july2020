class APIService {
	constructor(baseUrl) {
		this.baseUrl = baseUrl
	}

	/**
	 * Creates a query string used for network request
	 * @param {object} queryParams query values used for request
	 * @returns {string} query string created from queryParams
	 */
	_createQueryString(queryParams) {
		return new URLSearchParams(queryParams).toString()
	}

	/**
	 * Makes a GET request to a specified endpoint using the baseUrl
	 * @param {string} endpoint server endpoint
	 * @param {object} queryParams query values used for request
	 */
	async get(endpoint, queryParams) {
		const url = new URL(`${this.baseUrl}${endpoint}`)

		if (queryParams) {
			url.search = this._createQueryString(queryParams)
		}

		const response = await fetch(url, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		return response.json()
	}
}

export default APIService
