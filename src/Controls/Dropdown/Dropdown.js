import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

// Styles
import './Dropdown.sass'

/**
 *
 * @param {label} - Label above the list
 * @param {dropdown} - Placeholder for list
 * @param {body} - Array of data that will be rendered in list
 */

const Dropdown = ({
	label = 'Label',
	title = 'Dropdown',
	body = ['Item1'],
}) => {
	const ref = useRef(null)

	const [selected, setSelected] = useState(null)

	// Add additional classes on click
	const onOpenDropDown = (e, select = null) => {
		// Open the list
		ref.current.querySelector('ul').classList.toggle('open')

		// Rotate the arrow
		ref.current.querySelector('i').classList.toggle('up')

		// If we are select something from list, memorize it
		if (select) {
			setSelected(select)
		}
	}
	return (
		<div className='dropdown' ref={ref}>
			<div className='dropdown__first'>
				<i className='arrow'></i>
				<label>{label}</label>
				{/* If nothing has been choosen, set default color */}
				<span
					style={!selected ? { color: '#7C9CBF' } : null}
					onClick={onOpenDropDown}
				>
					{selected ? selected : title}
				</span>
			</div>
			<div className='dropdown__list'>
				<ul>
					{/* Render the array of passed data */}
					{body.map((item, i) => {
						return (
							<li
								key={i}
								onClick={() => onOpenDropDown(null, item)}
							>
								{item}
							</li>
						)
					})}
				</ul>
			</div>
		</div>
	)
}

Dropdown.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string,
	body: PropTypes.array,
}

export default Dropdown
