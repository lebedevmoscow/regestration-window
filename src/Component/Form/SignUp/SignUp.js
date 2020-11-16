import React, { useState } from 'react'

// Styles
import './SignUp.sass'

// React Components
import Button from './../../../Controls/Button/Large/Accent'
import Checkbox from './../../../Controls/Checkbox'
import TextField from './../../../Controls/TextField'
import Dropdown from './../../../Controls/Dropdown/'

const SignUp = () => {
	// State for each field
	const [name, setName] = useState({
		error: false,
		value: '',
	})
	const [email, setEmail] = useState({
		error: false,
		value: '',
	})

	const [phone, setPhone] = useState({
		error: false,
		value: '',
	})

	const [lang, setLang] = useState({
		error: false,
		value: null,
	})

	// Button disabled control
	const [dis, setDis] = useState(true)

	// Body for dropdown render function
	const dropdownlist = ['Немецкий', 'Русский', 'Английский', 'Французский']

	const onSubmitHandler = (e) => {
		e.preventDefault()

		// Check the each field by regular expression
		const nameRegEx = /^[а-яА-Я'][а-яА-Я-' ]+[а-яА-Я']?$/u
		const emailRegEx = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i
		const phoneRegEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i

		// If something don't passes generate an error
		if (!name.value.match(nameRegEx)) {
			setName((p) => {
				return { ...p, error: 'Некорректное имя' }
			})
		}
		if (!email.value.match(emailRegEx)) {
			setEmail((p) => {
				return { ...p, error: 'Некорректный email' }
			})
		}

		// Length of entered phone
		let telephoneLength = 0
		for (let i = 0; i < phone.value.length; i++) {
			if (phone.value[i].match(/^[0-9]*$/)) {
				telephoneLength++
			}
		}

		// Validate the entered phone
		if (!phone.value.match(phoneRegEx) || telephoneLength !== 11) {
			setPhone((p) => {
				return { ...p, error: 'Некорректное номер телефона' }
			})
		}

		if (!dis) return
	}

	return (
		<div className='signup' id='signup'>
			<div className='signup__name'>
				<h2>Регистрация</h2>
				<span>
					Уже есть аккаунт? <a href='#'>Войти</a>
				</span>
			</div>
			<div className='signup__form'>
				<form>
					<ul>
						<li>
							<TextField
								label='Имя'
								placeholder={'Введите Ваше имя'}
								email={name.error}
								update={setName}
								error={name.error}
							/>
						</li>
						<li>
							<TextField
								label='Email'
								placeholder={'Введите ваш email'}
								update={setEmail}
								error={email.error}
							/>
						</li>
						<li>
							<TextField
								label='Номер телефона'
								placeholder={'Введите ваш номер телефона'}
								error={phone.error}
								update={setPhone}
							/>
						</li>
						<li>
							<Dropdown
								label='Язык'
								title='Язык'
								update={setLang}
								body={dropdownlist}
							/>
						</li>
						<li>
							<Checkbox update={setDis} />
							<div className='signup__copyright'>
								Я принимаю <a href='#'>условия</a>
								использования
							</div>
						</li>
						<li>
							<Button
								onClick={onSubmitHandler}
								label='Зарегестрироваться'
								disabled={dis}
							/>
						</li>
					</ul>
				</form>
			</div>
		</div>
	)
}

export default SignUp
