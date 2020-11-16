import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './Checkbox.sass'

/**
 * @param {update} - useState update function
 */

const Checkbox = ({ update }) => {
	return (
		<label className='checkcontainer'>
			<input type='checkbox' onChange={() => update((p) => !p)} />
			<span className='checkmark'></span>
		</label>
	)
}

Checkbox.propTypes = {
	update: PropTypes.func,
}

export default Checkbox
