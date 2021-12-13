import React from 'react';
import './App.css';
import {Main} from "../features/main/Main";
import {Navbar} from "../features/navbar/Navbar";


const App = () => {
    return (
        <div className="App">
            <Navbar/>
            <Main />
        </div>
    );
}

export default App;
