import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import style from './Slider.module.css';

function valuetext(value: number) {
    return `${value}°C`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState<number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };

    return (
        <div className={style.sliderWrapper}>

           <h3 className={style.sliderTitle}>Number of cards</h3>

            <Box sx={{ width: 300, paddingLeft:1, paddingRight:3}}>
                <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                />
            </Box>
        </div>
        
    );
}
