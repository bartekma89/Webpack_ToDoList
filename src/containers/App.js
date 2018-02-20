import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import ToDoList from '../components/ToDoList';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: [
				{
					id: 1,
					task: 'clean room',
				},
				{
					id: 2,
					task: 'wash the dishes',
				},
				{
					id: 3,
					task: 'feed my cat',
				},
			],
		};
	}

	addToDo(item) {
		const todo = {
			text: item,
			id: uuid.v4(),
		};

		const data = [...this.state.data, todo];

		this.setState({ data });
	}

	removeToDo(id) {
		const filteredArray = this.state.data.filter(item => item.id !== id);

		this.setStade({
			data: filteredArray,
		});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title="ToDo List" number={this.state.data.length} />
				<ToDoList list={this.state.data} />
			</div>
		);
	}
}

export default App;
