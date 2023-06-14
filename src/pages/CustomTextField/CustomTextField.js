import { Box, OutlinedInput } from "@mui/material";
import classes from "./style";
import React, { useState } from "react";

const CustomTextField = ({ label, name, formik, placeholder, onKeyDown, initializeValue }) => {
    const [value, setValue] = useState(initializeValue)
    const style = classes();
    const handleChange = (event => {
        setValue(event.target.value);
        formik?.setFieldValue(name, value);
    })
    return (
        <Box style={style.input}>
            <label style={style.label}><b>{label}</b></label>
            <OutlinedInput
                onKeyDown={onKeyDown}
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                inputProps={{ sx: style.text }}
                value={value}
            />
        </Box>
    )
}

export default CustomTextField;