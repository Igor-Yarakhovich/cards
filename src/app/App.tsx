import React, {useEffect} from 'react';
import './App.css';
import {Main} from "../features/main/Main";
import {Navbar} from "../features/navbar/Navbar";
import {initialiseTC} from "../components/profile/profileReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {Preloader} from "../assets/Preloader/Preloader";

const App = () => {
    const initialised = useSelector<AppRootStateType, boolean>(state => state.profile.initialised)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialiseTC())
    }, [dispatch])

    if (!initialised) {
        return <Preloader/>
    }
    return (
        <div className="App">
            <Navbar/>
            <Main/>
        </div>
    );
}

export default App;
