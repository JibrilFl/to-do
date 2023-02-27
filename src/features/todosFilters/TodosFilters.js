import { filtersSwitching, filterFulfield } from './filtersSlice';
import { useDispatch, useSelector } from 'react-redux';

import './todosFilters.scss';

const arrBtn = ['all', 'red', 'green', 'blue'];
const arrActive = ['true', 'false'];

const TodosFilters = () => {

	const dispatch = useDispatch();

	const { activeFilter, fulfield } = useSelector(state => state.filters);

	const createBtn = (arr) => {
		if (arr.length < 1) {
			return <h1>Тут ничего нет</h1>
		}

		


		return arr.map((btn, i) => {

			let style = `filters__list_btn filters__list_btn-${btn}`;
			let name = '';

			if (activeFilter === btn) {
				style += ' active';
			}

			switch(btn) {
				case 'all':
					name = 'Все';
					break;
				case 'red':
					name = 'Красные';
					break;
				case 'green':
					name = 'Зеленые';
					break;
				case 'blue':
					name = 'Синие';
					break;
				default:
					break;
			}

			return (
				<li key={i} className="filters__list">
					<button className={style} onClick={() => dispatch(filtersSwitching(btn))}>{name}</button>
				</li>
			)
		})
	}

	const createActive = (arr) => {
		if (arr.length < 1) {
			return <h1>Тут ничего нет</h1>
		}

		return arr.map((btn, i) => {
			let style = `filters__list_btn`;
			let name = '';

			if (fulfield === btn) {
				style += ' active';
			}

			switch (btn) {
				case 'false':
					name = 'Активные';
					break;
				case 'true':
					name = 'Завершенные';
					break;
				default:
					break;
			}

			return (
				<li key={i} className="filters__list">
					<button className={style} onClick={() => dispatch(filterFulfield(btn))}>{name}</button>
				</li>
			)
		})
	}

	const btn = createBtn(arrBtn);
	const active = createActive(arrActive);

	return (
		<div className="filters">
			<ul className="filters__items">
				{btn}
			</ul>

			<ul className="filters__items">
				{active}
			</ul>
		</div>
	)
};

export default TodosFilters;