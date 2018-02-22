import React from 'react';

const ToDoForm = props => {
	return (
		<form>
			<input
				type="text"
				placeholder="nazwa..."
				value={props.input}
				onChange={props.onInputChange}
			/>
			<button
				type="submit"
				onClick={props.onFormSubmit.bind(this, props.input)}
			>
				Add
			</button>
		</form>
	);
};

export default ToDoForm;
