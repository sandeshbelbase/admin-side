import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

const CustomRadio = forwardRef((props, ref) => {
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
          type="radio"
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          value={val}
          hidden={hidden}
        />
      )}
    />
  );
});
CustomRadio.displayName = "CustomRadio";

export default CustomRadio;
