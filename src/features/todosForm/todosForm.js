import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { todosAdd } from "../todosList/todosSlice";

const TodosForm = () => {

	const [todoName, setTodoName] = useState('');
	const [todoColor, setTodoColor] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();

		const newTodo = {
			id: nanoid(4),
			name: todoName,
			color: todoColor,
			active: false
		}

		dispatch(todosAdd(newTodo));

		setTodoName('');
	}

	return (
		<form className="border p-4 shadow-lg rounded" onSubmit={onSubmit}>
			<div className="mb-3">
				<label htmlFor="name">Добавить новую задачу?</label>
				<input
					required
					type="text"
					name="name"
					id="name"
					value={todoName}
					onChange={(e) => setTodoName(e.target.value)}
					placeholder="Мы сделаем..." />
				<label htmlFor="color"></label>
				<select
					required
					name="color"
					id="color"
					value={todoColor}
					onChange={(e) => setTodoColor(e.target.value)} >
					<option value="none">Без цвета</option>
					<option value="red">Красный</option>
					<option value="green">Зеленый</option>
					<option value="blue">Синий</option>
					<option value="black">Черный</option>
				</select>
			</div>

			<button type="submit" className="btn btn-primary">Создать</button>
		</form>
	)
};

export default TodosForm;