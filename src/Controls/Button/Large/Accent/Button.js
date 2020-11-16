import React from 'react'
import PropTypes from 'prop-types'

// Styles
import './Button.sass'

/**
 * @param onClick - On Click Handler
 * @param label - Button label
 * @param disabled - If true, adds additional classess
 */
const Button = ({ onClick = null, label = 'Button', disabled = 'false' }) => {
	return (
		<button
			onClick={onClick}
			className='btn main-btn'
			disabled={disabled ? true : false}
		>
			{label}
		</button>
	)
}

Button.propTypes = {
	onClick: PropTypes.func,
	label: PropTypes.string,
	disabled: PropTypes.bool,
}

export default Button
