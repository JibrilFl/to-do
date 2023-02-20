import { useSelector } from 'react-redux';
import { filteredTodosSelector, todosDeleted, todosActiveSelected } from './todosSlice';
// import { useDispatch } from 'react-redux';

import TodosListItem from '../todosListItem/todosListItem';


const TodosList = () => {

	const todos = useSelector(filteredTodosSelector);
	// const dispatch = useDispatch();

	const createTodo = (arr) => {

		if (arr.length < 1) {
			return (
				<li className="todosList__info">
					<h1>Задач пока нема!</h1>
					<p>Добавьте их срочна</p>
				</li>
			)
		}

		return arr.map(({id, ...props}) => {
			return (
				<TodosListItem key={id} id={id} {...props}/>
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