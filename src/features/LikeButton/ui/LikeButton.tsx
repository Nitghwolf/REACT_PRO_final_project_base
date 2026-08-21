import s from './LikeButton.module.css';
import { ReactComponent as LikeSvg } from '../../../shared/assets/icons/like.svg';
import classNames from 'classnames';
import { useAppSelector } from '../../../shared/store/utils';
import { userSelectors } from '../../../shared/store/slices/user';
import {
	useSetLikeProductMutation,
	useDeleteLikeProductMutation,
	IErrorResponse,
} from '../../../shared/store/api/productsApi';
import { toast } from 'react-toastify';
import { Button } from '../../../shared/ui/Button';
import { memo, useCallback } from 'react';

type TLikeButtonProps = {
	product: Product;
};
export const LikeButton = memo(function LikeButton({
	product,
}: TLikeButtonProps) {
	const accessToken = useAppSelector(userSelectors.getAccessToken);
	const user = useAppSelector(userSelectors.getUser);

	const [setLike] = useSetLikeProductMutation();
	const [deleteLike] = useDeleteLikeProductMutation();

	const isLike = product?.likes.some((l) => l.userId === user?.id);

	const toggleLike = useCallback(async () => {
		if (!accessToken) {
			toast.warning('Вы не авторизованы');
			return;
		}
		let response;
		if (isLike) {
			response = await deleteLike({ id: `${product.id}` });
		} else {
			response = await setLike({ id: `${product.id}` });
		}

		if (response.error) {
			const error = response.error as IErrorResponse;
			toast.error(error.data.message);
		}
	}, [accessToken, deleteLike, product.id, isLike, setLike]);

	return (
		<Button
			className={classNames(s['card__favorite'], {
				[s['card__favorite_is-active']]: isLike,
			})}
			onclick={toggleLike}
			icon={<LikeSvg />}
		/>
	);
});
