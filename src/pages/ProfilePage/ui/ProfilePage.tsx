import s from './ProfilePage.module.css';
import classNames from 'classnames';
import { ButtonBack } from '../../../features/ButtonBack';
import { WithProtection } from '../../../shared/store/HOCs/WithProtection';

export const ProfilePage = WithProtection(() => {
	return (
		<div className={s['profilePage']}>
			<ButtonBack />
			<h1 className={s['form__title']}>Мои данные</h1>
			<form className={classNames(s['form'], s['form'])}>
				<div className={s['form__row']}>
					<input
						className={classNames(s['form__label'], s['input'])}
						name='name'
						id='name'
						type='text'
						placeholder='Введите ваше имя'
					/>
					<input
						className={classNames(s['form__label'], s['input'])}
						name='about'
						id='about'
						type='text'
						placeholder='Описание профессии'
					/>
				</div>
				<div className={s['form__row']}>
					<input
						className={classNames(s['form__label'], s['input'])}
						name='avatar'
						id='avatar'
						type='url'
						placeholder='Введите ссылку на аватарку'
					/>
					<input
						className={classNames(s['form__label'], s['input'])}
						name='email'
						id='email'
						type='text'
						placeholder='email'
					/>
				</div>

				<button
					type='submit'
					className={classNames(
						s['form__btn'],
						s['secondary'],
						s['maxContent']
					)}>
					Сохранить
				</button>
			</form>
			<h2 className={s['form__title']}>Изменить пароль</h2>
			<form className={classNames(s['form'], s['form'])}>
				<div className={classNames(s['form__row'], s['form__row_min'])}>
					<input
						className={classNames(s['form__label'], s['input'])}
						name='password'
						id='password'
						type='password'
						placeholder='Пароль'
					/>
				</div>
				<button
					type='submit'
					className={classNames(
						s['form__btn'],
						s['secondary'],
						s['maxContent']
					)}>
					Сохранить
				</button>
			</form>
		</div>
	);
});
