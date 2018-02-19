import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "../components/Title";

class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			data: []
		};
	}

	addToDo(item) {

		const todo = {
			text: item,
			id: uuid.v4()
		};

		const data = [...this.state.data, todo];

		this.setState( {data} );

	}

	removeToDo(id) {

		const filteredArray = this.state.data.filter( item => item.id !== id );

		this.setStade({
			data: filteredArray
		})

	}

	render() {
		return ( 
            <div className={style.TodoApp}>
            	<Title title="ToDo List" number={this.state.data.length}></Title>
            </div>
        );
	}

}

export default App;