import React from 'react';
import { uuid } from '../utils';
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
	({ name = uuid(), className, options, value, onChange }, ref) => {
		return (
			<div
				role="radiogroup"
				className={className}
				ref={ref}
				onChange={e => onChange((e.target as HTMLInputElement).value)}
			>
				{options.map((option, index) => (
					<Radio
						key={index}
						name={name}
						defaultChecked={value === option.value}
						{...option}
					/>
				))}
			</div>
		);
	},
);

export default RadioGroup;
