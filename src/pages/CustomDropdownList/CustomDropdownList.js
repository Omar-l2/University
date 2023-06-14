import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import classes from './style';

export default function SelectLabels({ items, label, formik, name }) {
    const [selected, setSelected] = React.useState(items[0].label);
    const style = classes();

    const handleChange = (event) => {
        setSelected(event.target.value);
        formik?.setFieldValue(name, event.target.value)
    };

    return (
        <div>
            <FormControl style={style.container}>
                <label style={style.label}><b>{label}</b></label>
                <Select
                    name={name}
                    sx={{ boxShadow: 4 }}
                    value={selected}
                    onChange={handleChange}
                    style={style.dropdown}
                >
                    {items.map(item => {
                        return <MenuItem
                            value={item.label}
                            key={item.key}
                            style={style.item}>
                            {item.label}
                        </MenuItem>
                    })}
                </Select>
            </FormControl>
        </div>
    );
}
