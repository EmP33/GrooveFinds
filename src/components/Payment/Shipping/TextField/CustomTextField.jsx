import React from "react";

import TextField from "@mui/material/TextField";
import { useFormContext, Controller } from "react-hook-form";

const CustomTextField = ({ name, label, placeholder }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      fullWidth
      // rules={{ required: "required" }}
      render={({ field }) => (
        <TextField
          label={label}
          placeholder={placeholder}
          variant="outlined"
          {...field}
        />
      )}
    />
  );
};

export default CustomTextField;
