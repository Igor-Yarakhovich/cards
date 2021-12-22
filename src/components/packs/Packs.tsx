import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPacksTC} from './packsReducer';
import {AppRootStateType} from '../../app/store';
import {PacksResponseType} from './packsPage-api';

import s from './Packs.module.css'
import {Navigate} from 'react-router-dom';
import {Preloader} from '../../assets/Preloader/Preloader';
import TablePagination from '../pagination/Pagination';
import SearchProduct from '../searchProduct/SearchProduct';


export const Packs = React.memo(() => {

    const data = useSelector<AppRootStateType, null | PacksResponseType>(state => state.packs.data)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPacksTC())
    }, [dispatch])
    const addCardsPacKHandler = useCallback(() => {
        dispatch(getPacksTC())

    }, [dispatch])
    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    if (!data) {
        return <Preloader/>
    }


    return <div className={s.main}>
        <SearchProduct/>
        <input type="checkbox" //checked={setUserId}
               onChange={addCardsPacKHandler}/> My packs
        <div className={s.header}>
            <div>name</div>
            <div>cardsCount</div>
            <div>created</div>
            <div>updated</div>
            <div>
                <button onClick={addCardsPacKHandler}>add</button>
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
                            <button>del</button>
                            <button>update</button>
                        </div>

                    </div>

                ))
            }
        </div>
        <TablePagination/>
    </div>
})

