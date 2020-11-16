import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Styles
import './TextField.sass'

/**
 *
 * @param {placeholder} - Form Placeholder
 * @param {label} - Label above the input
 * @param {update} - useState update function
 * @param {required} - Is required input or not
 * @param {error} - If validation error has happen, then this render the error message
 */
const TextField = ({
	placeholder = 'Placeholder',
	label = 'Label',
	update = null,
	required = false,
	error = false,
}) => {
	// Input value
	const [value, setValue] = useState('')

	// Input value handler
	const onChangeHandler = (e) => {
		setValue(e.target.value)
		if (update) {
			update((prev) => {
				return { ...prev, value: e.target.value }
			})
		}
	}

	return (
		<div className='textfield'>
			<label className='textfield__label'>{label}</label>
			<input
				className='input'
				type='text'
				value={value}
				placeholder={placeholder}
				required={required}
				onChange={onChangeHandler}
			></input>
			{/* If error has been happen - render the error */}
			{error ? <div className='textfield__error'>{error}</div> : null}
		</div>
	)
}

TextField.propTypes = {
	placeholder: PropTypes.string,
	label: PropTypes.string,
	update: PropTypes.func,
	required: PropTypes.bool,
	error: PropTypes.bool,
}

export default TextField
