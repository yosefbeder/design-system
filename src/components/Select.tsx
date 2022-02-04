import React, { useState } from 'react';
import Select, { GroupBase, Props, StylesConfig } from 'react-select';

const customStyles: StylesConfig<unknown, boolean, GroupBase<unknown>> = {
	container(provided) {
		return {
			...provided,
		};
	},
	control(provided, state) {
		return {
			...provided,
			minHeight: 0,
			borderRadius: 'var(--rounded)',
			border: `1px solid ${
				state.isFocused ? 'var(--color-blue-400)' : 'var(--color-gray-200)'
			}`,
			boxShadow: state.isFocused ? '0 0 0 2px var(--color-blue-200)' : 'none',
			':hover': {
				borderColor: state.isFocused
					? 'var(--color-blue-400)'
					: 'var(--color-gray-400)',
			},
		};
	},
	valueContainer(provided) {
		return {
			...provided,
			padding: 'var(--space-1) var(--space-2)',
		};
	},
	dropdownIndicator(provided, state) {
		return {
			...provided,
			padding: 'var(--space-1) var(--space-2)',
			color: 'var(--color-gray-400)',
			':hover': {
				color: 'var(--color-gray-400)',
			},
		};
	},
	input(provided) {
		return {
			...provided,
			margin: 0,
			padding: 0,
		};
	},
	singleValue(provided) {
		return {
			...provided,
			margin: 0,
			padding: 0,
		};
	},
	placeholder(provided) {
		return {
			...provided,
			margin: 0,
			color: 'var(--color-gray-400)',
		};
	},
	indicatorSeparator(provided) {
		return {
			...provided,
			margin: 'var(--space-1-5) 0',
			backgroundColor: 'var(--color-gray-200)',
		};
	},
	option(provided) {
		return {
			...provided,
			padding: 'var(--space-1) var(--space-2)',
		};
	},
};

const ExtendedSelect: React.FC<Props> = ({ styles, ...props }) => {
	return <Select styles={{ ...customStyles, ...styles }} {...props} />;
};

export default ExtendedSelect;
