import React from 'react';

interface IProps {
	className?: string;
	placeholder?: string;
	value: string | number;
	onChange: React.ChangeEventHandler<HTMLInputElement>;
	type?: React.HTMLInputTypeAttribute;
}

export const Input: React.FC<IProps> = ({
	className,
	value,
	onChange,
	placeholder,
	type,
}) => {
	return (
		<input
			type={type || 'text'}
			className={className}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};
