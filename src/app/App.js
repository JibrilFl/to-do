import React from 'react';
import TodosForm from '../features/todosForm/TodosForm';
import TodosList from '../features/todosList/TodosList';
import TodosFilters from '../features/todosFilters/TodosFilters';

import './app.scss';

function App() {
	return (
		<div className="App">
			<div className="App__wrapper">
				<TodosForm />
				<TodosFilters />
			</div>
			<TodosList className="todoList" />
		</div>
	);
}

export default App;