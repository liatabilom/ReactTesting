import React, { Component } from 'react';
import Person from './components/Person/Person';

class Main extends Component {
	state = {
		persons: [
			{ id: '1', name: 'Paula', age: 8 },
			{ id: '2', name: 'Gabriel', age: 10 },
			{ id: '3', name: 'Daniel', age: 5 },
		],
		otherState: 'other value',
		showPersons: false,
	};

	switchNameHandler = (newName) => {
		//console.log('was clicked');
		this.setState({
			persons: [
				{ name: newName, age: 8 },
				{ name: 'Gabriel', age: 12 },
				{ name: 'Daniel', age: 5 },
			],
		});
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = { ...this.state.persons[personIndex] };

		person.name = event.target.value;

		const persons = [...this.state.persons];
		persons[personIndex] = person;

		this.setState({
			persons: persons,
		});
	};

	deletePersonHandler = (personIndex) => {
		const persons = [...this.state.persons];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({
			showPersons: !doesShow,
		});
	};

	render() {
		const style = {
			background: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangeHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
		}
		return (
			<div className="App">
				<h1>I'm a React component</h1>
				<button style={style} onClick={this.togglePersonsHandler}>
					Toggle Persons
				</button>
				{persons}
			</div>
		);
	}
}

export default Main;
