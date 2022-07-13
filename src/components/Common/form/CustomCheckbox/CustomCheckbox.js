import React from "react";
import { Controller } from "react-hook-form";

function CustomCheckbox({ control, name, disabled = false }) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value } }) => {
				// console.log(value, "value");
				return (
					<input
						disabled={disabled}
						type='checkbox'
						onChange={onChange}
						checked={value}
					/>
				);
			}}
		/>
	);
}

export default CustomCheckbox;
