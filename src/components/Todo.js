import React from 'react';
import style from './ToDo.css';

const ToDo = props => {
	return (
		<li className={style}>
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

export default ToDo;
