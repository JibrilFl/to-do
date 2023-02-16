import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { todosAdd } from "../todosList/todosSlice";

const TodosForm = () => {

	const [todoName, setTodoName] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: nanoid(4),
			name: todoName
		}

		dispatch(todosAdd(newTodo));

		setTodoName('');
	}

	return (
		<form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
			<div className="mb-3">
				<label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
				<input
					required
					type="text"
					name="name"
					className="form-control"
					id="name"
					value={todoName}
					onChange={(e) => setTodoName(e.target.value)}
					placeholder="Как меня зовут?" />
			</div>

			<button type="submit" className="btn btn-primary">Создать</button>
		</form>
	)
};

export default TodosForm;