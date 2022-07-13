import React from "react";
import { Controller } from "react-hook-form";

function CustomTextarea({
  control,
  label = "",
  placeholder = "",
  type = "text",
  name,
  disabled = false,
  rows
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <textarea
          disabled={disabled}
          name={name}
          className="form-control"
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          rows = {rows}
        ></textarea>
      )}
    />
  );
}

export default CustomTextarea;
