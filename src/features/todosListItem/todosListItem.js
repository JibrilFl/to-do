import { todosDeleted, todosUpdate } from '../todosList/todosSlice';
import { useDispatch } from 'react-redux';

const TodosListItem = ({id, color, name}) => {

	const dispatch = useDispatch();

	return (
		<li style={{color}}>
			<input type="text" name='name' value={name} onChange={(e) => dispatch(todosUpdate({id, changes: {name: e.target.value}}))}/>
			<button onClick={() => dispatch(todosDeleted(id))}>Delete todo</button>
			<input type="checkbox" name="active" onChange={(e) => dispatch(todosUpdate({id, changes: {active: e.target.checked }}))} />
		</li>
	)
};

export default TodosListItem;