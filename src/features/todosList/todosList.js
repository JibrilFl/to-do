import { useSelector } from 'react-redux';
import { selectAll, todosDeleted } from './todosSlice';
import { useDispatch } from 'react-redux';


const TodosList = () => {

	const todos = useSelector(selectAll);
	const dispatch = useDispatch();

	const createTodo = (arr) => {
		if (arr.length < 1) {
			return (
				<li className="todosList__info">
					<h1>Задач пока нема!</h1>
					<p>Добавьте их срочна</p>
				</li>
			)
		}
		return arr.map(({name, id}) => {
			return (
				<li key={id} className="todosList__item">
					<p>{name}</p>
					<button onClick={() => dispatch(todosDeleted(id))}>Delete todo</button>
				</li>
			)
		});
	}

	const elems = createTodo(todos);
	console.log(todos)

	return (
		<ul className="todosList">
			{elems}
		</ul>
	)
};

export default TodosList;