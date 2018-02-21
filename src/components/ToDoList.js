import React from 'react';
import ToDo from './ToDo';
import style from './ToDoList.css';

const ToDoList = props => {
	return (
		<ul className={style}>
			{props.list.map(item => (
				<ToDo
					item={item}
					key={item.id}
					onRemoveToDo={props.onRemoveToDo.bind(this)}
				/>
			))}
		</ul>
	);
};

export default ToDoList;
