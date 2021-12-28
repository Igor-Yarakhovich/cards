import React, {useEffect, useState} from "react";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../app/store";
import {PacksResponseType} from "../packs/packsPage-api";
import {Navigate, useParams} from "react-router-dom";
import {Preloader} from "../../assets/Preloader/Preloader";
import s from "../packs/Packs.module.css";
import SearchProduct from "../searchProduct/SearchProduct";
import {SortButton} from "../sortButton/SortButton";
import {Button} from "@mui/material";
import {getAllCardsTC, setCardAnswerAC, setPageAC, setPageCountAC} from "./cardsReducer";
import TablePaginationDemo from "../pagination/Pagination";

export const Cards = React.memo(() => {

    const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    const [cardId, setCardId] = useState("")
    const {
        cards, page, pageCount, cardsTotalCount,
        sortCards, cardAnswer, cardQuestion
    } = useAppSelector(state => state.cards)
    const data = useSelector<AppRootStateType, null | PacksResponseType>(state => state.packs.data)

    const dispatch = useDispatch()
    let {packId} = useParams<string>()

    const [searchValue, setSearchValue] = useState("")

    const [showCreatePopup, setShowCreatePopup] = useState(false);
    const onClickShowCreate = () => setShowCreatePopup(true)
    const onClickHideCreate = () => setShowCreatePopup(false)

    const [showUpdatePopup, setShowUpdatePopup] = useState(false);
    const onClickHideUpdate = () => setShowUpdatePopup(false)

    const [showDeletePopup, setShowDeletePopup] = useState(false);
    const onClickHideDelete = () => setShowDeletePopup(false)

    const deleteCard = (id: string) => {
        setCardId(id)
        setShowDeletePopup(true)
    }

    const updateCard = (id: string) => {
        setShowUpdatePopup(true)
        setCardId(id)
    }

    const setPage = (value: number) => {
        dispatch(setPageAC(value))
    }
    const setPageCount = (pageCount: number) => {
        dispatch(setPageCountAC(pageCount))
    }

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setCardAnswerAC(searchValue))
        }, 500)
        return () => clearTimeout(timer)
    }, [searchValue, dispatch])

    useEffect(() => {
        packId && dispatch(getAllCardsTC(packId))
    }, [cardQuestion, cardAnswer, sortCards, page, pageCount, dispatch, packId])

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    if (!data) {
        return <Preloader/>
    }

    return <div className={s.main}>
        <SearchProduct/>
        <div className={s.header}>
            <div className={s.sortBlock}>Question <span className={s.sort}> <SortButton valueOne={'1question'}
                                                                                        valueTwo={'0question'}/> </span>
            </div>
            <div className={s.sortBlock}>Answer <span className={s.sort}><SortButton valueOne={'1answer'}
                                                                                     valueTwo={'0answer'}/></span></div>
            <div className={s.sortBlock}>Grade <span className={s.sort}><SortButton valueOne={'1grade'}
                                                                                    valueTwo={'0grade'}/></span>
            </div>
            <div className={s.sortBlock}>Updated <span className={s.sort}><SortButton valueOne={'1updated'}
                                                                                      valueTwo={'0updated'}/></span>
            </div>
            <div>
                <Button variant="contained" onClick={() => {
                }}>Create card</Button>
            </div>
        </div>

        <div className={s.table}>
            {
                cards.map((value, index) => (
                    <div key={cards[index]._id} className={s.row}>
                        <div>{cards[index].question}</div>
                        <div>{cards[index].answer}</div>
                        <div>{cards[index].grade}</div>
                        <div>{cards[index].updated}</div>
                    </div>

                ))
            }
        </div>
        <TablePaginationDemo cardPacksTotalCount={data.cardPacksTotalCount} page={page} pageCount={pageCount}/>
    </div>
})