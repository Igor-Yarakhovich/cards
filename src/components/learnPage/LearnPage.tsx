import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {AppRootStateType} from "../../app/store";
import {getAllCardsTC} from "../cards/cardsReducer";

import style from './LearnPage.module.css';
import RadioButton from "./radioButton/RadioButton";

export type CardType = {
    _id: string;
    cardsPack_id: string;

    answer: string;
    question: string;
    grade: number;
    shots: number;

    type: string;
    rating: number;
    more_id: string;

    created: string;
    updated: string;
}


const grades = ['не знал', 'забыл', 'долго думал', 'перепутал', 'знал'];

const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce((acc: { sum: number, id: number}, card, i) => {
            const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
            return {sum: newSum, id: newSum < rand ? i : acc.id}
        }
        , {sum: 0, id: -1});
    console.log('test: ', sum, rand, res)

    return cards[res.id + 1];
}

const LearnPage = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [first, setFirst] = useState<boolean>(true);
    // const [first, setFirst] = useState<boolean>(0);
    const {cards} = useSelector((store: AppRootStateType) => store.cards);
    const {id} = useParams();

    const [card, setCard] = useState<CardType>({
        _id: 'fake',
        cardsPack_id: '',

        answer: 'answer fake',
        question: 'question fake',
        grade: 0,
        shots: 0,

        type: '',
        rating: 0,
        more_id: '',

        created: '',
        updated: '',
    });

    const dispatch = useDispatch();
    useEffect(() => {
        console.log('LearnContainer useEffect');

        if (id) {
            dispatch(getAllCardsTC(id));
            setFirst(false);
        }

        if (cards.length > 0) setCard(getCard(cards));

        return () => {
            console.log('LearnContainer useEffect off');
        }
    }, [dispatch, id, cards, first]);

    const onNext = () => {
        setIsChecked(false);

        if (cards.length > 0) {
            // dispatch
            setCard(getCard(cards));
        } else {

        }
    }

    console.log('render LearnPage');
    return (
        <div className={style.learnPage}>             
            <div className={style.learnPageWrapper}>
                <h2 className={style.learnPageTitle}>Learn <q>Pack Name</q></h2>

            <div className={style.learnPageRow}>
                <b className={style.learnPageRowText}>Question:   </b>
                <q>{card.question}</q>
            </div>
            {/* <div className={style.learnPageRow}>
                <b className={style.learnPageRowText}>Answer:   </b>
                <q>{card.answer}</q>
            </div> */}
            
            <div className={style.learnPageBtnBox} >
                <button className={style.learnPageBtnCancel}>Cancel</button> 
                {/* <button className={style.profileBtnCancel} onClick={() => setShow(false)}>Cancel</button> */}
                <button className={style.learnPageBtnShow} onClick={() => setIsChecked(true)}>Show answer</button>   
                
               
            </div>

            {isChecked && (
                <>
                <div className={style.learnPageRow}>
                    <b className={style.learnPageRowText}>Answer:   </b>
                    <q>{card.answer}</q>
                </div> 
                         <RadioButton/>
                    {/* {grades.map((g, i) => (
                        <button className={style.learnPageRadioGroup} 
                        key={'grade-' + i} onClick={() => {
                        }}>{g}
                        </button>
                    ))} */}
                    <div className={style.learnPageBtnBox}>
                        <button className={style.learnPageBtnCancel}>Cancel</button> 
                        {/* <button className={style.profileBtnCancel} onClick={() => setShow(false)}>Cancel</button> */}   
                        <button className={style.learnPageBtnShow} onClick={onNext}>Next</button>
                    </div>
                </>

                
            )}
            </div>
        </div>
    );
};

export default LearnPage;