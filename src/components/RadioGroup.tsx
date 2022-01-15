import React from 'react';
import { v4 } from 'uuid';
import Radio from './Radio';

interface RadioGroupProps {
	name?: string;
	className?: string;

	options: {
		label: string;
		value: string;
		disabled?: boolean;
	}[];
	value: string;
	onChange: (value: string) => void;
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
	({ name = v4(), className, options, value, onChange }, ref) => {
		return (
			<div role="radiogroup" className={className} ref={ref}>
				{options.map((option, index) => (
					<Radio
						key={index}
						name={name}
						label={option.label}
						value={option.value}
						checked={value === option.value}
						onChange={() => onChange(option.value)}
						disabled={option.disabled}
					/>
				))}
			</div>
		);
	},
);

export default RadioGroup;
