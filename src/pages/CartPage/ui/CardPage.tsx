import s from './CardPage.module.css';
import classNames from 'classnames';
import { useAppSelector } from '../../../shared/store/utils';
import { cartSelectors } from '../../../shared/store/slices/cart';
import { CardAmount } from '../../../widgets/CardAmount';
import { CardList } from '../../../widgets/CardList';

export const CardPage = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	if (!products.length) {
		return <h1 className='header-title'>Товаров нет корзине</h1>;
	}

	return (
		<div className={classNames(s['content'], s['container'])}>
			<div className={classNames(s['content-cart'])}>
				<div className={classNames(s['cart-title'])}>
					<span>{products.length}</span> в корзине
				</div>
				<CardList title={''} products={products} />
				<CardAmount products={products} />
			</div>
		</div>
	);
};
