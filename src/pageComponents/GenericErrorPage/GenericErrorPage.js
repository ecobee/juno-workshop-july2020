import React from 'react'

import './GenericErrorPage.css'

const GenericErrorPage = (props) => {
	const { description } = props

	return (
		<div className="generic-error-page-description">
			<span className="generic-error-page-description">{description}</span>
		</div>
	)
}

GenericErrorPage.defaultProps = {
	description: 'Something went wrong!',
}

export default GenericErrorPage
