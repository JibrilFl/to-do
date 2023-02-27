import { todosUpdate } from '../todosList/todosSlice';
import { useDispatch } from 'react-redux';

import './todoListItem.scss';

import trash from '../../media/trash.svg';

const TodosListItem = ({ todosDeleted, id, color, name, active }) => {
	const dispatch = useDispatch();

	return (
		<li className='todoItem'>
			<button className='todoItem__btn' onClick={() => dispatch(todosUpdate({ id, changes: { active: !active } }))}>
				<svg className='todoItem__btn_icon' clipRule="evenodd" fillRule="evenodd" strokeLinejoin="round" strokeMiterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m11.998 2.005c5.517 0 9.997 4.48 9.997 9.997 0 5.518-4.48 9.998-9.997 9.998-5.518 0-9.998-4.48-9.998-9.998 0-5.517 4.48-9.997 9.998-9.997zm-5.049 10.386 3.851 3.43c.142.128.321.19.499.19.202 0 .405-.081.552-.242l5.953-6.509c.131-.143.196-.323.196-.502 0-.41-.331-.747-.748-.747-.204 0-.405.082-.554.243l-5.453 5.962-3.298-2.938c-.144-.127-.321-.19-.499-.19-.415 0-.748.335-.748.746 0 .205.084.409.249.557z" fill={active ? 'green' : 'grey'} /></svg>
			</button>
			<input className='todoItem__name' style={{borderLeft: `2px solid ${color}`}} type="text" name='name' value={name} onChange={(e) => dispatch(todosUpdate({ id, changes: { name: e.target.value } }))} />
			<button className='todoItem__btn' onClick={() => todosDeleted()}>
				<img className='todoItem__btn_icon' src={trash} alt="trash" />
			</button>
		</li>
	)
};

export default TodosListItem;