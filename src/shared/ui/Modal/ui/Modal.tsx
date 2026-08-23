import ReactDOM from 'react-dom';
import React, { type FC, useEffect, useRef } from 'react';
import s from './Modal.module.css';

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ children, onClose, isOpen, title }) => {
	const modalRef = useRef<HTMLDivElement>(null);
	const closeRef = useRef<HTMLButtonElement>(null);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'hidden'; // Блокируем скролл
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose]);

	useEffect(() => {
		closeRef.current?.focus();
	}, [isOpen]);

	if (!isOpen) return null;

	return ReactDOM.createPortal(
		// eslint-disable-next-line jsx-a11y/click-events-have-key-events
		<div
			className={s['modal-overlay']}
			onClick={onClose}
			role='dialog'
			aria-modal='true'
			aria-labelledby='modal-title'>
			<div
				ref={modalRef}
				className={s['modal-content']}
				onClick={(e) => e.stopPropagation()}>
				<div className={s['modal-header']}>
					<h2 id='modal-title' className={s['modal-title']}>
						{title}
					</h2>
					<button
						ref={closeRef}
						onClick={onClose}
						className={s['close']}
						aria-label='Закрыть'>
						✕
					</button>
				</div>
				<div className={s['modal-body']}>{children}</div>
			</div>
		</div>,
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		document.getElementById('modal-root')
	);
};
