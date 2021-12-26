import React from 'react';
import style from './SortButton.module.css'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {useDispatch} from 'react-redux';
import {setSortPacksCountAC} from '../packs/packsReducer';

type PropsSort = {
    valueOne:string,
    valueTwo:string
}

export const SortButton = (props:PropsSort) => {
    const dispatch = useDispatch()
    const onClickSorUptHandler =()=>dispatch(setSortPacksCountAC(props.valueOne))
    const onClickSorDowntHandler =()=>dispatch(setSortPacksCountAC(props.valueTwo))
    return (
        <div className={style.main}>
            <span> <ArrowDropDownIcon color={'primary'} fontSize={'large'} onClick={onClickSorDowntHandler}/> </span>
            <span> <ArrowDropUpIcon color={'primary'} fontSize={'large'} onClick={onClickSorUptHandler}/> </span>
        </div>
    );
}

