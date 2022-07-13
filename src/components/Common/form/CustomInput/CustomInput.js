import React from "react";
import { Controller } from "react-hook-form";

function CustomInput({
	control,
	label = "",
	placeholder = "",
	type = "text",
	name,
	disabled = false,
	require,
}) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { onChange, value } }) => (
				<input
					disabled={disabled}
					name={name}
					className='form-control'
					type={type}
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					require={require}
				/>
			)}
		/>
	);
}

export default CustomInput;
