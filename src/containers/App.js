import React from 'react';
import uuid from 'uuid';
import style from './App.css';
import Title from '../components/Title';
import ToDoList from '../components/ToDoList';
import ToDoForm from '../components/ToDoForm';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			text: '',
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

		console.log('add');

		const data = [...this.state.data, todo];

		this.setState({ data });
	}

	removeToDo(id) {
		const filteredArray = this.state.data.filter(item => item.id !== id);

		console.log('remove');
		this.setState({
			data: filteredArray,
		});
	}

	onInputChange(event) {
		const value = event.currentTarget.value;

		this.setState({
			text: value,
		});
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.addToDo(this.state.text);
		this.setState({
			text: '',
		});
	}

	render() {
		return (
			<div className={style.TodoApp}>
				<Title title="ToDo List" number={this.state.data.length} />
				<ToDoForm
					input={this.state.text}
					onInputChange={this.onInputChange.bind(this)}
				/>
				<ToDoList
					list={this.state.data}
					onRemoveToDo={this.removeToDo.bind(this)}
				/>
			</div>
		);
	}
}

export default App;
