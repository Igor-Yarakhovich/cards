import React, {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {PacksResponseType} from "../packs/packsPage-api";
import {addPacksTC, deleteMyPacksTC, getMyPacksTC, setPackUserIdAC} from "../packs/packsReducer";
import {Navigate} from "react-router-dom";
import {Preloader} from "../../assets/Preloader/Preloader";
import s from "../packs/Packs.module.css";
import SearchProduct from "../searchProduct/SearchProduct";
import {SortButton} from "../sortButton/SortButton";
import {Button} from "@mui/material";
import TablePaginationDemo from "../pagination/Pagination";

export const Cards = React.memo(() => {

    const data = useSelector<AppRootStateType, null | PacksResponseType>(state => state.packs.data)
    const userId = useSelector<AppRootStateType, string>(state => state.profile.data._id)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch();

    const [myUserId, setMyUserId] = useState(false)

    useEffect(() => {
        dispatch(getMyPacksTC(''))
    }, [dispatch])

    const addMyPacksHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyUserId(e.currentTarget.checked)
        dispatch(getMyPacksTC(myUserId ? '' : userId))
        dispatch(setPackUserIdAC(myUserId ? '' : userId));
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
        return <Navigate to="/login"/>
    }

    if (!data) {
        return <Preloader/>
    }

    return <div className={s.main}>
        <SearchProduct/>
        <div><input type="checkbox"/> All packs</div>
        <div><input type="checkbox" onChange={addMyPacksHandler}/> My packs</div>
        <div className={s.header}>
            <div className={s.sortBlock}>Name <span className={s.sort}><SortButton/></span></div>
            <div className={s.sortBlock}>Cards <span className={s.sort}><SortButton/></span></div>
            <div className={s.sortBlock}>Updated <span className={s.sort}><SortButton/></span></div>
            <div className={s.sortBlock}>Created by<span className={s.sort}><SortButton/></span></div>
            <div>
                <Button variant="contained" onClick={addNewPackHandler}>Add pack</Button>
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
                            <Button color={'success'} variant="contained"> Learn</Button>
                            <Button  variant="contained"> Update</Button>
                            <Button color={'error'} variant="contained" onClick={deleteMyPackHandler}> del</Button>
                        </div>

                    </div>

                ))
            }
        </div>
        <TablePaginationDemo/>
    </div>
})