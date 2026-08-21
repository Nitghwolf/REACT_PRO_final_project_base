import { cartActions } from '../store/slices/cart';
import { useAppDispatch } from '../store/utils';

export const useAddToCart = () => {
	const dispatch = useAppDispatch();
	const addProductToCart = (cardProduct: CardProduct) => {
		dispatch(cartActions.addCartProduct(cardProduct));
	};

	return { addProductToCart };
};
