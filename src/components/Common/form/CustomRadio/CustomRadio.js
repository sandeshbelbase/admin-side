import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

const CustomRadio = (props) => {
	const {
		control,
		placeholder = "",
		name,
		disabled = false,
		hidden = false,
		value,
	} = props;
	let val = value;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value } }) => (
				<input
					disabled={disabled}
					name={name}
					type='radio'
					checked={val == value ? true : false}
					placeholder={placeholder}
					onChange={onChange}
					value={val}
					hidden={hidden}
				/>
			)}
		/>
	);
};

export default CustomRadio;
