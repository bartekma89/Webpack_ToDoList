import React from 'react';

const Todo = props => {
	return (
		<li>
			{props.item.task}
			<button onClick={props.onRemoveToDo.bind(this, props.item.id)}>
				Delete
			</button>
		</li>
	);
};

Todo.propTypes = {};

export default Todo;
