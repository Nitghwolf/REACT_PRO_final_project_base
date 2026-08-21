import { ChangeEvent } from 'react';
import { useSort } from '../hooks/useSort';
import s from './Sort.module.css';

export const Sort = () => {
	const { sort, setSort, sortParams } = useSort();
	const handleSortSelect = (e: ChangeEvent<HTMLSelectElement>) => {
		const newSort = e.target.value as Sort;
		setSort(newSort);
	};

	return (
		<select
			value={sort}
			onChange={handleSortSelect}
			className={s['sortSelect']}>
			{sortParams.map((p) => (
				<option key={p.title} value={p.value}>
					{p.title}
				</option>
			))}
		</select>
	);
};
