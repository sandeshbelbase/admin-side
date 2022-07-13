import React from "react";
import { Controller } from "react-hook-form";

function CustomSelect({
  control,
  label = "",
  placeholder = "",
  type = "text",
  name,
  options,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <select className="form-control" onChange={onChange} value={value}>
          {options?.map((item, index) => (
            <option value={item?.value} key={index}>
              {item?.label}
            </option>
          ))}
        </select>
      )}
    />
  );
}

export default CustomSelect;
