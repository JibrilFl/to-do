import { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { todosAdd } from "../todosList/todosSlice";

import './todosForm.scss';

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
		<form className="form" onSubmit={onSubmit}>
			<div className="form__wrapper">
				<div className="form__item">
					<label className="form__item_label" htmlFor="name">Добавить новую задачу?</label>
					<input
						className="form__item_input"
						required
						type="text"
						name="name"
						id="name"
						value={todoName}
						onChange={(e) => setTodoName(e.target.value)}
						placeholder="Мы сделаем..." />
				</div>
				<div className="form__item">
					<label className="form__item_label" htmlFor="color">Выберите цвет</label>
					<select
						className="form__item_select"
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
			</div>

			<button type="submit" className="form__btn">Создать</button>
		</form>
	)
};

export default TodosForm;