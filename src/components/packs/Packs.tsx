import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPacksTC, deleteMyPacksTC, getMyPacksTC, setPackUserIdAC} from "./packsReducer";
import {AppRootStateType} from "../../app/store";
import {PacksResponseType} from "./packsPage-api";
import {Preloader} from "../../assets/Preloader/Preloader";
import s from "./Packs.module.css"
import SearchProduct from "../searchProduct/SearchProduct";
import TablePaginationDemo from "../pagination/Pagination";
import {Navigate} from 'react-router-dom'
import {SortButton} from '../sortButton/SortButton';
import {Button} from '@mui/material';


export const Packs = React.memo(() => {

    const data = useSelector<AppRootStateType, null | PacksResponseType>(state => state.packs.data)
    const userId = useSelector<AppRootStateType, string>(state => state.profile.data._id)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch();

    const [myUserId, setMyUserId] = useState(false)


    useEffect(() => {
        dispatch(getMyPacksTC(''))
    }, [dispatch])

    // const addCardsPacKHandler = useCallback(() => {
    //     dispatch(getMyPacksTC(''))
    // }, [dispatch])

    const addMyPacksHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyUserId(e.currentTarget.checked)
        dispatch(getMyPacksTC(myUserId ? "" : userId))
        dispatch(setPackUserIdAC(myUserId ? "" : userId));
    }, [dispatch, setMyUserId, myUserId, userId])

    const addNewPackHandler = useCallback(() => {
        dispatch(addPacksTC())
    }, [dispatch])

    const deleteMyPackHandler = useCallback(() => {
        if (data) {
            dispatch(deleteMyPacksTC(data.cardPacks[0]._id))
        }
    }, [dispatch, data])

    if (!isLoggedIn) {
        return <Navigate to='/login'/>
    }

    if (!data) {
        return <Preloader/>
    }

    return <div className={s.main}>
        <SearchProduct/>
        <input type="checkbox"
               onChange={addMyPacksHandler}/> My packs
        <div className={s.header}>
            <div className={s.sortBlock}>name <span className={s.sort}><SortButton/></span></div>
            <div className={s.sortBlock} >cardsCount <span className={s.sort}><SortButton/></span></div>
            <div className={s.sortBlock} >created <span className={s.sort}><SortButton/></span></div>
            <div className={s.sortBlock} >updated <span className={s.sort}><SortButton/></span></div>
            <div>

                <button onClick={addNewPackHandler}>add</button>

            </div>
        </div>

        <div className={s.table}>
            {
                data.cardPacks.map((value, index) => (
                    <div key={data.cardPacks[index]._id} className={s.row}>
                        <div>{data.cardPacks[index].name}</div>
                        <div>{data.cardPacks[index].cardsCount}</div>
                        <div>{data.cardPacks[index].created}</div>
                        <div>{data.cardPacks[index].updated}</div>
                        <div>

                            <button onClick={deleteMyPackHandler}>del</button>
                            <button>update</button>

                        </div>

                    </div>

                ))
            }
        </div>
        <TablePaginationDemo/>
    </div>
})


