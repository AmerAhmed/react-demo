import React from 'react'

// It returns header.
const Header = () => {
	return (
		<thead>
			<tr>
				<th>Name</th>
				<th>Job</th>
				<th>Remove</th>
			</tr>
		</thead>
	)
}

// It returns body.
const Body = (props) => {
	const row = props.employeeInfo.map((row, index) => {
		return (
			<tr key={index}>
				<td>{row.name}</td>
				<td>{row.job}</td>
				<td>
					<button onClick={() => props.handleRemove(index)}>Delete</button>
				</td>
			</tr>
		)
	})
	return <tbody>{row}</tbody>
}

/**
 * Employee's Table.
 * Render TableHeader and TableBody components,
 * and returns them.
 */
const Table = (props) => {
	return (
		<table>
			<Header />
			<Body
				employeeInfo={props.employeeInfo}
				handleRemove={props.handleRemove}
			/>
		</table>
	)
}

export default Table
