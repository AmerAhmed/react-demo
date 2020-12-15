import React, { Component } from 'react'
import Form from './components/Form'
import Table from './components/Table'

// Render and return Table
class App extends Component {
	state = {
		characters: [],
	}

	handleRemove = (index) => {
		const { characters } = this.state

		this.setState({
			characters: characters.filter((_character, i) => {
				return i !== index
			}),
		})
	}

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] })
	}

	render() {
		return (
			<div className='container'>
				<div className='center-column'>
					<div className='item-row'>
						<h1 className='header'>Employee's Information</h1>
						<Table
							employeeInfo={this.state.characters}
							handleRemove={this.handleRemove}
						/>
						<Form handleSubmit={this.handleSubmit} />
					</div>
				</div>
			</div>
		)
	}
}
export default App
