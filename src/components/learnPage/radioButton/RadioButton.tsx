import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


import style from './RadioButton.module.css';



function RadioButton() {

    return ( 
        <div className={style.radioButton}>
            <FormControl component="fieldset">
                <FormLabel className={style.radioButtonTitle} component="legend">Rate yourself:</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        >
                        <FormControlLabel value="Did not know" control={<Radio />} label="Did not know" />
                        <FormControlLabel value="Forgot" control={<Radio />} label="Forgot" />
                        <FormControlLabel value="A lot of thought" control={<Radio />} label="A lot of thought" />
                        <FormControlLabel value="Сonfused" control={<Radio />} label="Сonfused" />
                        <FormControlLabel value="Knew the answer" control={<Radio />} label="Knew the answer" />
                    </RadioGroup>
            </FormControl>
        </div>
    );
}

export default RadioButton;