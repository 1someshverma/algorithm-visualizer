import React from 'react';
import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { InputLabel } from '@mui/material';
import { MenuItem } from '@mui/material';

import FormControl from '@mui/material/FormControl';

import { Select } from '@mui/material';

const theme = createTheme();
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const SimpleSelect = (props) => {
    const classes = useStyles();
    const [age, setAge] = React.useState('0');

    const handleChange = (event) => {
        setAge(event.target.value);
        props.onAlgoChanged(event.target.value);
    };

    return (
        <ThemeProvider theme = {theme}>
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Algorithm</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    {props.items.map( (item,itemidx)=>{
                        return(
                            <MenuItem
                                key={itemidx}
                                value={itemidx}>{item}</MenuItem>
                        );
                    } )}
                </Select>
            </FormControl>
        </div>
        </ThemeProvider>
    );
}

export default SimpleSelect;