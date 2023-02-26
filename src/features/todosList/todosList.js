import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filteredTodosSelector, todosDeleted} from './todosSlice';

import TodosListItem from '../todosListItem/TodosListItem';

import './todosList.scss';

const TodosList = () => {

	const dispatch = useDispatch();

	const todos = useSelector(filteredTodosSelector);

	const onDeleted = useCallback((id) => {
		dispatch(todosDeleted(id));
	}, [dispatch]);

	const createTodo = (arr) => { 

		if (arr.length === 0) {
			return (
				<li className="todosList__info">
					<h3>Вы еще не добавили задачи</h3>
				</li>
			)
		}

		return arr.map(({id, ...props}) => {
			return (
				<TodosListItem todosDeleted={() => onDeleted(id)} key={id} id={id} {...props}/>
			)
		});
	}

	const elems = createTodo(todos);

	return (
		<ul className="todosList">
			{elems}
		</ul>
	)
};

export default TodosList;