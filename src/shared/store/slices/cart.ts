import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
	products: CardProduct[];
}

const createInitState = (): CartState => ({
	products: [],
});

export const cartSlice = createSlice({
	name: 'cart',
	initialState: createInitState(),
	reducers: {
		addCartProduct(state, action: PayloadAction<CardProduct>) {
			state.products = [...state.products, action.payload];
		},
		deleteCartProduct(state, action: PayloadAction<CardProduct['id']>) {
			state.products = state.products.filter((p) => p.id !== action.payload);
		},
		setCartProductCount(
			state,
			action: PayloadAction<Pick<CardProduct, 'id' | 'count'>>
		) {
			if (action.payload.count === 0) {
				state.products = state.products.filter(
					(p) => p.id !== action.payload.id
				);
			} else {
				state.products = state.products.map((p) => ({
					...p,
					count: p.id === action.payload.id ? action.payload.count : p.count,
				}));
			}
		},
	},
	selectors: {
		getCartProducts: (state: CartState) => state.products,
	},
});

export const cartActions = { ...cartSlice.actions };
export const cartSelectors = cartSlice.selectors;
