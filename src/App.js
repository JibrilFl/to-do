import React from 'react';
import TodosForm from './features/todosForm/todosForm';
import TodosList from './features/todosList/todosList';

function App() {
	return (
		<div className="App">
			<TodosList />
			<TodosForm />
		</div>
	);
}

export default App;