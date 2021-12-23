
import React from "react";
import {ChangeEvent, useCallback, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addPacksTC, getMyPacksTC, setPackUserIdAC} from "./packsReducer";
import {AppRootStateType} from "../../app/store";
import {PacksResponseType} from "./packsPage-api";
import {Preloader} from "../../assets/Preloader/Preloader";
import s from "./Packs.module.css"
import {Navigate} from "react-router-dom";



export const Packs = React.memo(() => {

    const data = useSelector<AppRootStateType, null | PacksResponseType>(state => state.packs.data)
    const userId = useSelector<AppRootStateType, string>(state => state.profile.data._id)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch();

    const [myUserId, setMyUserId]= useState(false)


    useEffect(() => {
        dispatch(getMyPacksTC(''))
    }, [dispatch])


    const addMyPacksHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyUserId(e.currentTarget.checked)
        dispatch(getMyPacksTC(myUserId ? "" : userId))
        dispatch(setPackUserIdAC(myUserId ? "" : userId));
    }, [dispatch, setMyUserId, myUserId, userId ])

    const addNewPackHandler = useCallback(() => {
        dispatch(addPacksTC())
    }, [dispatch ])


    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    if (!data) {
        return <Preloader/>
    }


    return <div className={s.main}>
        <SearchProduct/>


    return <div>
        <input type="checkbox" checked={myUserId}
               onChange={addMyPacksHandler} /> My packs

        <div className={s.header}>
            <div>name</div>
            <div>cardsCount</div>
            <div>created</div>
            <div>updated</div>
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

                        <div> <button >del</button>
                            <button >update</button></div>

                    </div>

                ))
            }
        </div>

    </div>
})

