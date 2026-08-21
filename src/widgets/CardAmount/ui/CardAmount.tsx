import s from '../../../pages/CartPage/ui/CardPage.module.css';
import classNames from 'classnames';
import { Button } from '../../../shared/ui/Button';
import { useMemo } from 'react';

type CardAmountProps = {
	products: CardProduct[];
};
export const CardAmount = ({ products }: CardAmountProps) => {
	const orders = useMemo(() => {
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

	const handleSubmitCart = () => {
		const order = products.map((p) => ({ id: p.id, count: p.count }));
		console.log('Отправка заказа на сервер: ', JSON.stringify(order, null, 2));
	};

	return (
		<div className={classNames(s['cart-amount'])}>
			<h1 className={classNames(s['cart-amount__title'])}>Ваша корзина</h1>
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
			<div className={classNames(s['cart-amount__total-cost'])}>
				<h2 className={classNames(s['cart-amount__total-cost-title'])}>
					Общая стоимость
				</h2>
				<span className={classNames(s['cart-amount__total-cost-value'])}>
					{`${orders.allPrice - orders.allDiscount} ₽`}
				</span>
			</div>
			<Button
				onclick={handleSubmitCart}
				className={classNames(
					s['button'],
					s['button_type_primary'],
					s['button_type_wide']
				)}
				text={'Оформить заказ'}
			/>
		</div>
	);
};
