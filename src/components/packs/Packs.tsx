import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {addPacksTC, deleteMyPacksTC, getMyPacksTC, setPacksNameAC, setPackUserIdAC} from './packsReducer';
import {AppRootStateType} from '../../app/store';
import {Preloader} from '../../assets/Preloader/Preloader';
import s from './Packs.module.css'
import SearchProduct from '../searchProduct/SearchProduct';
import TablePaginationDemo from '../pagination/Pagination';
import {Navigate, useNavigate} from 'react-router-dom'
import {SortButton} from '../sortButton/SortButton';
import {Button} from '@mui/material';
import SuperInputText from "../superComponents/superInputText/SuperInputText";


export const Packs = React.memo(() => {
    const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
    const {data, page, pageCount, packName} = useAppSelector(state => state.packs)
    const userId = useSelector<AppRootStateType, string>(state => state.profile.data._id)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [myUserId, setMyUserId] = useState(true)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        if (myUserId) {
            dispatch(getMyPacksTC(''))
        }
    }, [dispatch, myUserId, page, pageCount, packName])

    const addMyPacksHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyUserId(e.currentTarget.checked)
        dispatch(getMyPacksTC(myUserId ? userId : ''))
        dispatch(setPackUserIdAC(myUserId ? userId : ''));
    }, [dispatch, setMyUserId, myUserId, userId])

    const addNewPackHandler = useCallback(() => {
        dispatch(addPacksTC())
    }, [dispatch])

    const deleteMyPackHandler = useCallback(() => {
        if (data) {
            dispatch(deleteMyPacksTC(data.cardPacks[0]._id))
        }
    }, [dispatch, data])

    function handleClick(packId: string) {
        navigate(`/cards/${packId}`, {replace: true});
    }

    useEffect(() => {
        let timer = setTimeout(() => dispatch(setPacksNameAC(searchValue)), 500)
        return () => clearTimeout(timer)
    }, [searchValue, dispatch])

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }
    console.log(searchValue)
    if (!data) {
        return <Preloader/>
    }

    return <div className={s.main}>
        <SuperInputText type="text" required onChangeText={setSearchValue} name={"Search"}/>
        <SearchProduct/>

        <div><input type="checkbox" checked={myUserId} onChange={addMyPacksHandler}/> All packs / My packs
            {myUserId ? <span className={s.showAll}>ALL PACKS</span> : <span className={s.showMy}>MY PACKS</span>}
        </div>

        <div className={s.header}>
            <div className={s.sortBlock}>Name <span className={s.sort}> <SortButton valueOne={'1name'}
                                                                                    valueTwo={'0name'}/> </span></div>
            <div className={s.sortBlock}>Cards <span className={s.sort}> <SortButton valueOne={'1cardsCount'}
                                                                                     valueTwo={'0cardsCount'}/> </span>
            </div>
            <div className={s.sortBlock}>Updated <span className={s.sort}><SortButton valueOne={'1updated'}
                                                                                      valueTwo={'0updated'}/></span>
            </div>
            <div className={s.sortBlock}>Created by</div>
            <div>
                <Button variant="outlined" onClick={addNewPackHandler}>Add pack </Button>
            </div>
        </div>

        <div className={s.table}>
            {
                data.cardPacks.map((value, index) => (
                    <div key={data.cardPacks[index]._id} className={s.row}>
                        <div>{data.cardPacks[index].name}</div>
                        <div>{data.cardPacks[index].cardsCount}</div>
                        <div>{data.cardPacks[index].created}</div>
                        <div>{data.cardPacks[index].user_name}</div>
                        <div>
                            <Button color={'success'} variant="contained"
                                    onClick={() => handleClick(data.cardPacks[index]._id)}
                            > Cards</Button>

                            {!myUserId ?
                                <span>
                                <Button variant="contained"> Update</Button>
                                <Button color={'error'} variant="contained" onClick={deleteMyPackHandler}> del</Button>
                            </span>
                                : ''
                            }

                        </div>

                    </div>

                ))
            }
        </div>

        <TablePaginationDemo cardPacksTotalCount={data.cardPacksTotalCount} page={page} pageCount={pageCount}/>
    </div>
})


