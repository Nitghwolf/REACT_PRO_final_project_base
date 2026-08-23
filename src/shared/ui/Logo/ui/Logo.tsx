import { Link } from 'react-router-dom';
// @ts-ignore
import LogoIcon from '../assets/logo.svg?react';
import s from './Logo.module.css';

export const Logo = () => {
	return (
		<Link to='/'>
			<img className={s['logo__pic']} src={LogoIcon} alt='Логотип компании' />
		</Link>
	);
};
