import React, { Component } from 'react'

class Form extends Component {
	constructor(props) {
		super(props)
		this.initialState = { name: '', job: '' }
		this.state = this.initialState
	}

	handleChange = (e) => {
		const { name, value } = e.target

		this.setState({
			[name]: value,
		})
	}

	onFormSubmit = (e) => {
		e.preventDefault()

		this.props.handleSubmit(this.state)
		this.setState(this.initialState)
	}

	render() {
		return (
			<div className='item-row'>
				<form onSubmit={this.onFormSubmit}>
					<label htmlFor='name'>Name:</label>
					<input
						type='text'
						name='name'
						id='name'
						value={this.state.name}
						onChange={this.handleChange}
					/>
					<label htmlFor='job'>Job:</label>
					<input
						type='text'
						name='job'
						id='job'
						value={this.state.job}
						onChange={this.handleChange}
					/>
					<button type='submit'>Submit</button>
				</form>
			</div>
		)
	}
}
export default Form
