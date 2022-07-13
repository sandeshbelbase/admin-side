import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-select";

function SearchableSelect({
  control,
  label = "",
  placeholder = "",
  type = "text",
  name,
  options,
  disabled = false,
}) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select options={options} onChange={(e) => onChange(e.value)} />
      )}
    />
  );
}

export default SearchableSelect;
