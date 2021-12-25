import React from 'react';
import style from './SortButton.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
export const SortButton = () => {
    return (
        <div className={style.main}>
            <span> <ArrowDropDownIcon color={'primary'} fontSize={'large'} /> </span>
            <span> <ArrowDropUpIcon color={'primary'} fontSize={'large'}/> </span>
        </div>
    );
}

