import React from 'react';

interface IProps {
	text?: string;
	className?: string;
	onclick?: React.MouseEventHandler<HTMLButtonElement>;
	icon?: React.ReactNode;
	disabled?: boolean;
}

export const Button: React.FC<IProps> = ({
	className,
	icon,
	onclick,
	text,
	disabled,
}) => {
	return (
		<button className={className || ''} onClick={onclick} disabled={disabled}>
			{text && text}
			{icon && icon}
		</button>
	);
};
