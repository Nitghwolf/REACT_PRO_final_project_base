import { useNavigate } from 'react-router-dom';
import s from './ButtonBack.module.css';
import { Button } from '../../../shared/ui/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const ButtonBack = () => {
	const navigate = useNavigate();

	return (
		<Button
			onclick={() => navigate(-1)}
			icon={<ArrowBackIcon />}
			className={s['buttonBack']}
		/>
	);
};
