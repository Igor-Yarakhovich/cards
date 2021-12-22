import * as React from 'react';

import TextField from './textField/TextField';
import Slider from './slider/Slider';
import {Button} from '@mui/material';
import style from './SearchProduct.module.css';

export default function SearchProduct() {
    return <div className={style.search}>
        <TextField/>
        <Slider/>
        <Button variant="contained" size="medium">
            Search
        </Button>
    </div>


}
