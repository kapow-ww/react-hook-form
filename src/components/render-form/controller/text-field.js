import React from "react";
import { TextField } from "@mui/material";
import { Controller, useFieldArray } from "react-hook-form";

const ControllerTextField = ({
  name,
  label,
  control,
  defaultValue,
  required,
  placeholder,
  ...props
}) => {
  // console.log("Form controller -->", props, name);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          defaultValue={defaultValue}
          required={required}
          placeholder={placeholder}
        />
      )}
    />
  );
};

export default ControllerTextField;
