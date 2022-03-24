import React from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = ({
  shippingDestination,
  shippingDestinations,
  setShipping,
  label,
}) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={shippingDestination}
        label={label}
        onChange={(e) => setShipping(e.target.value)}
      >
        {Object.entries(shippingDestinations)
          .map(([code, name]) => ({ id: code, label: name }))
          .map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.label}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
};

export default CustomSelect;
