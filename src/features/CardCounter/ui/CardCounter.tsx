import { useCount } from '../hooks/useCount';
import s from './CardCounter.module.css';
import classNames from 'classnames';
import { Button } from '../../../shared/ui/Button';
import { Input } from '../../../shared/ui/Input';
import { memo } from 'react';

type TCartCounter = {
	productId: string;
};

export const CardCounter = memo(function CardCounter({
	productId,
}: TCartCounter) {
	const { count, stock, handleSetCount, handleIncrement, handleDecrement } =
		useCount(productId);

	return (
		<>
			<div className={classNames(s['button-count'])}>
				<Button
					onclick={handleDecrement}
					className={classNames(s['button-count__minus'])}
					text={'-'}
				/>
				<Input
					value={count}
					type='number'
					onChange={handleSetCount}
					className={classNames(s['button-count__num'])}
				/>
				<Button
					onclick={handleIncrement}
					className={classNames(s['button-count__plus'])}
					disabled={count >= stock}
					text={'+'}
				/>
			</div>
		</>
	);
});
