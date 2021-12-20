import React, {useEffect} from 'react';
import './App.css';
import {Main} from "../features/main/Main";
import {Navbar} from "../features/navbar/Navbar";
import {initialiseTC} from "../components/profile/profileReducer";
import {useDispatch} from "react-redux";

const App = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(initialiseTC())
    }, [dispatch])

    return (
        <div className="App">
            <Navbar/>
            <Main />
        </div>
    );
}

export default App;
