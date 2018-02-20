import React from 'react';
import style from './Todo.css';

const Todo = props => {
	return (
		<li className={style.li}>
			{props.item.task}
			<button
				className={style.btn}
				onClick={props.onRemoveToDo.bind(this, props.item.id)}
			>
				Delete
			</button>
		</li>
	);
};

export default Todo;
