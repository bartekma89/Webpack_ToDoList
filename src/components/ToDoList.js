import React from 'react';
import Todo from './Todo';

const ToDoList = props => {
	return (
		<ul>
			{props.list.map(item => (
				<Todo
					item={item}
					key={item.id}
					onRemoveToDo={props.onRemoveToDo.bind(this)}
				/>
			))}
		</ul>
	);
};

export default ToDoList;
