import { WithProtection } from 'shared/store/HOCs/WithProtection.tsx';
import { WithQuery } from 'shared/store/HOCs/WithQuery.tsx';
import { useProducts } from 'shared/store/hooks/useProducts.ts';
import { ButtonBack } from 'features/ButtonBack';
import { CardList } from 'widgets/CardList';
import s from './FavoritesPage.module.css';

const CardListWithQuery = WithQuery(CardList);

export const FavoritesPage = WithProtection(() => {
	const { isLoading, isError, products, error } = useProducts();

	return (
		<div className={s['favoritesPage']}>
			<ButtonBack />
			<CardListWithQuery
				title='Избранные'
				isLoading={isLoading}
				isError={isError}
				products={products}
				error={error}
			/>
		</div>
	);
});
