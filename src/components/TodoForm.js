import React from 'react';

const ToDoForm = props => {
	return (
		<form onSubmit={props.onFormSubmit}>
			<input
				type="text"
				placeholder="nazwa..."
				value={props.input}
				onChange={props.onInputChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default ToDoForm;
