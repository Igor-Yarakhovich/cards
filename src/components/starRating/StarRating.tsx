import style from './StarRating.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';



const MyRating = styled(Rating)({
    root: {
        fontSaze: 12 ,
    },
    '& .MuiRating-iconFilled': {
        color: '#21268F',
    },
    '& .MuiRating-iconEmpty': {
        color: '#D7D8EF',
    },
});

function StarRating() {

    return ( 
        <div className={style.starRating}>
            <MyRating 
                readOnly
                precision={0.5}
                defaultValue={3.5}
                size="small"
                />
                

        </div>
    
    );
}

export default StarRating;