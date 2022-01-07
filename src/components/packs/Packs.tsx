import React, {ChangeEvent, useCallback, useEffect, useState} from 'react';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

import {
    addPacksTC,
    deleteMyPacksTC,
    getMyPacksTC,
    setPacksNameAC,
    setSortPacksCountAC
} from './packsReducer';

import {AppRootStateType} from '../../app/store';
import {Preloader} from '../../assets/Preloader/Preloader';

import s from './Packs.module.css';

import TablePaginationDemo from '../pagination/Pagination';
import {Navigate, useNavigate} from 'react-router-dom'
import {SortButton} from '../sortButton/SortButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SuperInputText from "../superComponents/superInputText/SuperInputText";

import icon from './../../assets/images/searchIcon.svg';

<<<<<<< HEAD
const SearchButton = styled(Button)({
    "&.MuiButton-root": {
        color: '#FEFEFF',
        backgroundColor: '#21268F',
        borderRadius: '18px',
        textTransform: 'inherit',
        width: '184px',
        height: '36px',

    },
});



// import { withStyles } from '@mui/styles';


// const useStyles = makeStyles({
//     root: {
//         background:'#21268F',
//         color:'#FEFEFF',
//         borderRadius:'18',
//     }, // a style rule
//   });

//   const SearchButton = withStyles({
//     root: {
//         color: '#000',
//         backgroundColor: '#000',
//     }
//     // rail: {
//     //     height: 1,
//     //     backgroundColor:'#E0E0E0',
//     //   },
// })(Button);

=======
import Modal from "../../assets/modal/Modal";



>>>>>>> master
export const Packs = React.memo(() => {
    const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
    const {data, page, pageCount, packName,sortPacks} = useAppSelector(state => state.packs)

    const userId = useSelector<AppRootStateType, string>(state => state.profile.data._id)
    const isLoggedIn = useSelector<AppRootStateType, boolean>(state => state.login.isLoggedIn)

    const dispatch = useDispatch();
    let navigate = useNavigate();

    const [myUserId, setMyUserId] = useState(true)
    const [searchValue, setSearchValue] = useState("")
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (myUserId) {
            dispatch(getMyPacksTC(''))
        }

    }, [dispatch, page, pageCount, packName,sortPacks])


    const addMyPacksHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setMyUserId(e.currentTarget.checked)
        dispatch(getMyPacksTC(myUserId ? userId : ''))

        //dispatch(setPackUserIdAC(myUserId ? userId : ''));
    }, [dispatch, setMyUserId, myUserId])


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

    if (!data) {
        return <Preloader/>
    }

<<<<<<< HEAD

    return <div className={s.main}>
        <div className={s.container}>
            <div className={s.packsWrapper}>
                <div className={s.packsLeftBox}>
                    <div>
                        <input type="checkbox" checked={myUserId} onChange={addMyPacksHandler}/> All packs / My packs
                                {myUserId ? <span className={s.showAll}>ALL PACKS</span> : <span className={s.showMy}>MY PACKS</span>}
                    </div>
                </div>
                <div className={s.packsRightBox}>
                    <div className={s.packsRightWrapper}>

                        <h2 className={s.packsTitle}>Packs list</h2>

                        <div className={s.packsRightTopBlock}>
                            <div className={s.packsSearchWrapper} >
                                <SuperInputText 
                                        className={s.packsSearchForm} 
                                        type="text" 
                                        required 
                                        onChangeText={setSearchValue} 
                                        placeholder='Search...'
                                        name={"Search"}/>
                                <img className={s.packsSearchIcon} src={icon} alt="search"/>
                            </div>
                            <SearchButton
                                
                                onClick={addNewPackHandler}>Add new pack </SearchButton>
                            
                        </div>
                        

                        <div className={s.header}>
                            <div className={s.sortBlock}>Name
                                <span className={s.sort}>
                                    <SortButton valueOne={'1name'}
                                                valueTwo={'0name'}/>
                                </span>
                            </div>
                            <div className={s.sortBlock}>Cards
                                <span className={s.sort}>
                                    <SortButton valueOne={'1cardsCount'}
                                                valueTwo={'0cardsCount'}/>
                                </span>
                            </div>
                            <div className={s.sortBlock}>Updated
                                <span className={s.sort}>
                                    <SortButton valueOne={'1updated'}
                                                valueTwo={'0updated'}/>
                                </span>
                            </div>
                            <div className={s.sortBlock}>Created by</div>
                            <div className={s.sortBlock}>Actions</div>
=======
    const onClickSortPacksNameUpHandler =()=>dispatch(setSortPacksCountAC('1name'))
    const onClickSortPacksNameDownHandler =()=>dispatch(setSortPacksCountAC('0name'))

    const onClickSortPacksCardsCountUpHandler =()=>dispatch(setSortPacksCountAC('1cardsCount'))
    const onClickSortPacksCardsCountDownHandler =()=>dispatch(setSortPacksCountAC('0cardsCount'))

    const onClickSortPacksCardsUpdateUpHandler =()=>dispatch(setSortPacksCountAC('1updated'))
    const onClickSortPacksCardsUpdateDownHandler =()=>dispatch(setSortPacksCountAC('0updated'))

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

        <div><input type="checkbox" checked={myUserId} onChange={addMyPacksHandler}/> All packs / My packs
            {myUserId ? <span className={s.showAll}>ALL PACKS</span> : <span className={s.showMy}>MY PACKS</span>}
        </div>

        <div className={s.header}>
            <div className={s.sortBlock}>Name <span className={s.sort}> <SortButton funOne={onClickSortPacksNameUpHandler} funTwo={onClickSortPacksNameDownHandler}/> </span></div>
            <div className={s.sortBlock}>Cards <span className={s.sort}> <SortButton funOne={onClickSortPacksCardsCountUpHandler} funTwo={onClickSortPacksCardsCountDownHandler}/> </span>
            </div>
            <div className={s.sortBlock}>Updated <span className={s.sort}><SortButton funOne={onClickSortPacksCardsUpdateUpHandler} funTwo={onClickSortPacksCardsUpdateDownHandler}/></span>
            </div>
            <div className={s.sortBlock}>Created by</div>
            <div>
                {/*onClick={addNewPackHandler}*/}
                <Button variant="outlined" onClick={() => setShow(true)}  >Add pack </Button>
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
>>>>>>> master
                        <div>
                    
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
                </div>
            </div>
                
        
                    </div>
                   
        

<<<<<<< HEAD
        
=======
                ))
            }
            <Modal
                enableBackground={true}
                backgroundOnClick={() => setShow(false)}
                width={300}
                height={200}
                // modalOnClick={() => setShow(false)}
                show={show}
            >
                <SuperInputText/>
                <button onClick={() => setShow(false)}>Cancel</button>
                <button onClick={addNewPackHandler}>Apply</button>
            </Modal>
        </div>

        <TablePaginationDemo cardPacksTotalCount={data.cardPacksTotalCount} page={page} pageCount={pageCount}/>
>>>>>>> master
    </div>
})


