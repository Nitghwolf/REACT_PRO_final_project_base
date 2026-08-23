import { useNavigate } from 'react-router-dom';
import s from './ButtonBack.module.css';
import { Button } from 'shared/ui/Button';

export const ButtonBack = () => {
	const navigate = useNavigate();

	return (
		<Button
			onclick={() => navigate(-1)}
			className={s['buttonBack']}
			text={'<'}
		/>
	);
};
