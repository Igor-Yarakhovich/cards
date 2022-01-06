import React from 'react';
import style from './SortButton.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

type PropsSort = {
    funOne:()=>void,
    funTwo:()=>void
}

export const SortButton = (props:PropsSort) => {

    return (
        <div className={style.main}>
            <span> <ArrowDropUpIcon color={'primary'} fontSize={'large'} onClick={props.funOne}/> </span>
            <span> <ArrowDropDownIcon color={'primary'} fontSize={'large'} onClick={props.funTwo}/> </span>

        </div>
    );
}

