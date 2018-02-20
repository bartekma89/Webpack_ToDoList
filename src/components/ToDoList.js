import React from 'react';
import Todo from './Todo';
import style from './ToDoList.css';

const ToDoList = props => {
	return (
		<ul className={style}>
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
