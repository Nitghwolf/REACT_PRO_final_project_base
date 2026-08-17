import { useNavigate } from 'react-router-dom';
import s from './ButtonBack.module.css';
import { ReactComponent as BackSvg } from '../../../shared/assets/icons/back.svg';
import { Button } from '../../../shared/ui/Button';

export const ButtonBack = () => {
	const navigate = useNavigate();

	return (
		<Button
			onclick={() => navigate(-1)}
			icon={<BackSvg />}
			className={s['buttonBack']}
		/>
	);
};
