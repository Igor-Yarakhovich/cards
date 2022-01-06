import React, {useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../app/store';
import {PacksResponseType} from '../packs/packsPage-api';
import {Navigate, useParams} from 'react-router-dom';
import {Preloader} from '../../assets/Preloader/Preloader';
import s from '../packs/Packs.module.css';
import {SortButton} from '../sortButton/SortButton';
import {Button} from '@mui/material';
import {getAllCardsTC, setCardAnswerAC, setSortCardsAC} from './cardsReducer';
import TablePaginationDemo from '../pagination/Pagination';
import LearnPage from '../learnPage/LearnPage';
import Modal from '../../assets/modal/Modal';

import style from './Cards.module.css';
import SuperInputText from "../superComponents/superInputText/SuperInputText";
import icon from "../../assets/images/searchIcon.svg";

export const Cards = React.memo(() => {

    const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)
    // const [cardId, setCardId] = useState('')
    const {
        cards, page, pageCount, cardsTotalCount,
        sortCards, cardAnswer, cardQuestion
    } = useAppSelector(state => state.cards)
    const data = useSelector<AppRootStateType, null | PacksResponseType>(state => state.packs.data)
    const dispatch = useDispatch()
    let {packId} = useParams<string>()

    const [searchValue, setSearchValue] = useState('')

    const onClickSortCardsQuestionUpHandler = () => dispatch(setSortCardsAC('1question'))
    const onClickSortCardsQuestionDownHandler = () => dispatch(setSortCardsAC('0question'))

    const onClickSortCardsAnswerUpHandler = () => dispatch(setSortCardsAC('1answer'))
    const onClickSortCardsAnswerDownHandler = () => dispatch(setSortCardsAC('0answer'))

    const onClickSortCardsGradeUpHandler = () => dispatch(setSortCardsAC('1grade'))
    const onClickSortCardsGradeDownHandler = () => dispatch(setSortCardsAC('0grade'))

    const onClickSortCardsUpdateUpHandler = () => dispatch(setSortCardsAC('1updated'))
    const onClickSortCardsUpdateDownHandler = () => dispatch(setSortCardsAC('0updated'))

    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch(setCardAnswerAC(searchValue))
        }, 500)
        return () => clearTimeout(timer)
    }, [searchValue, dispatch])

    useEffect(() => {
        packId && dispatch(getAllCardsTC(packId))
    }, [cardQuestion, cardAnswer, sortCards, page, pageCount, dispatch, packId])

    // const createCardHandler = () => {
    //     dispatch(createNewCardTC(cardsPack_id, cardQuestion, cardAnswer, grade, shots))
    // }

    const [show, setShow] = useState(false);

    if (!isLoggedIn) {
        return <Navigate to="/login"/>
    }

    if (!data) {
        return <Preloader/>
    }
    console.log(data)

    return <div className={s.main}>
        <div className={s.mainSearchWrapper} >
            <SuperInputText
                className={s.mainSearchForm}
                type="text"
                required
                onChangeText={setSearchValue}
                placeholder='Search...'
                name={"Search"}/>
            {!searchValue && <img className={s.mainSearchIcon} src={icon} alt="search"/>}
        </div>
        <div className={s.header}>
            <div className={s.sortBlock}>Question <span className={s.sort}> <SortButton
                funOne={onClickSortCardsQuestionUpHandler} funTwo={onClickSortCardsQuestionDownHandler}/> </span>
            </div>
            <div className={s.sortBlock}>Answer <span className={s.sort}><SortButton
                funOne={onClickSortCardsAnswerUpHandler} funTwo={onClickSortCardsAnswerDownHandler}/></span></div>
            <div className={s.sortBlock}>Grade
                <span className={s.sort}>
                    <SortButton funOne={onClickSortCardsGradeUpHandler}
                                funTwo={onClickSortCardsGradeDownHandler}/>
                </span>
            </div>
            <div className={s.sortBlock}>Updated <span className={s.sort}><SortButton
                funOne={onClickSortCardsUpdateUpHandler} funTwo={onClickSortCardsUpdateDownHandler}/></span>
            </div>
            <div>
                <Button variant="contained" onClick={() => {
                }}>Create card</Button>
                <Button color={'success'} variant="contained" onClick={() => setShow(true)}> Learn</Button>
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
        <>
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}

                width={600}
                height={200}
                // modalOnClick={() => setShow(false)}

                show={show}
            >
                <LearnPage/>
                <div className={style.cardLearnModalBtnBox}>
                    {/* <button className={style.cardLearnModalBtnCancel} onClick={() => setShow(false)}>Cancel</button>
                <button className={style.cardLearnModalBtnNext}>Next</button> */}
                </div>


            </Modal>
        </>

    </div>
})