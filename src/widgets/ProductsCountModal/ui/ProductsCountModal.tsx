import { useMemo, useState } from 'react';
import { Modal } from '../../../shared/ui/Modal';
import AssignmentIcon from '@mui/icons-material/Assignment';
import s from './ProductsCountModal.module.css';
import { useAppSelector } from '../../../shared/store/utils';
import { cartSelectors } from '../../../shared/store/slices/cart';
import classNames from 'classnames';

export const ProductsCountModal = () => {
	const products = useAppSelector(cartSelectors.getCartProducts);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const orders = useMemo(() => {
		if (!products.length) return { allPrice: 0, allDiscount: 0 };

		return products.reduce(
			(acc, p) => {
				return {
					...acc,
					allPrice: p.price * p.count + acc.allPrice,
					allDiscount: p.discount * p.count + acc.allDiscount,
				};
			},
			{ allPrice: 0, allDiscount: 0 }
		);
	}, [products]);

	return (
		<div className={s['productsCountModal']}>
			<AssignmentIcon
				onClick={() => setIsModalOpen(true)}
				style={{ height: '34px', width: '34px' }}
			/>
			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title='В корзине'>
				<div className={classNames(s['cart-amount__table'])}>
					<div className={classNames(s['cart-amount__table-row'])}>
						<span className={classNames(s['cart-amount__table-title'])}>
							{`Товары (${products.length})`}
						</span>
						<span className={classNames(s['cart-amount__table-value'])}>
							{`${orders.allPrice} ₽`}
						</span>
					</div>
					<div className={classNames(s['cart-amount__table-row'])}>
						<span className={classNames(s['cart-amount__table-title'])}>
							Скидка
						</span>
						<span
							className={classNames(
								s['cart-amount__table-value'],
								s['cart-amount__table-value-discount']
							)}>
							{`${orders.allDiscount} ₽`}
						</span>
					</div>
				</div>
			</Modal>
		</div>
	);
};
