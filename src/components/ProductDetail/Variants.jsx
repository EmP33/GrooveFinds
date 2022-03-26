import React, { useState, useEffect } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Variants = ({ label, options, onChangeVariant }) => {
  const [option, setOption] = useState(options[0].id);

  const handleChange = (event) => {
    setOption(event.target.value);
  };

  useEffect(() => {
    onChangeVariant(option);
  }, [onChangeVariant, option]);

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={option}
        label={label}
        onChange={handleChange}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.id}>
            {option.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default React.memo(Variants);
