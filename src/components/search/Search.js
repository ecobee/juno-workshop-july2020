import React, { useState } from 'react'
import './Search.css'

const Search = (props) => {
	const { onSubmit } = props

	const [value, setValue] = useState('')

	const handleChange = (event) => {
		setValue(event.target.value)
	}

	const onSearchClicked = () => {
		if (value === '') {
			alert('Hey where is the input at?')
		} else {
			onSubmit(value)
		}
	}

	return (
		<div className="Search">
			<input placeholder="Search Movies" onChange={handleChange}></input>
			<button onClick={onSearchClicked}>SEARCH</button>
		</div>
	)
}

export default Search
