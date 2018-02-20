import React from 'react';
import style from './Title.css';

const Title = props => {
	return (
		<div className={style.TodoTitle}>
			<h1>{props.title}</h1>
			<h3>Quantity of tasks: {props.number}</h3>
		</div>
	);
};

export default Title;
