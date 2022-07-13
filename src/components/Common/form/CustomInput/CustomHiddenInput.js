import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";

export const CustomHiddenInput = forwardRef((props, ref) => {
  const {
    name,
    control,
    type = "text",
    errors,
    placeholder = null,
    label = "",
    fullWidth = true,
    defaultValue,
    rule = { required: false },
  } = props;

  // console.log(name)
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <input
            type={type}
            onChange={(e) => onChange(e.target.files[0])}
            fullWidth={fullWidth}
            placeholder={placeholder}
            label={label}
            size="medium"
            ref={ref}
            variant="outlined"
            {...props}
          />
        )}
        rules={rule}
      />
    </>
  );
});

CustomHiddenInput.displayName = "CustomHiddenInput";
