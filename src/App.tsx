import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./Header/Header";

import { RouteComponent } from './RouteComponent/RouteComponent';
import {useDispatch} from "react-redux";
import {authMeTC} from "./bll/reducers/login-reducer";

function App() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(authMeTC())

    },[])
    return (
        <div className="App">
            <Header/>
            <RouteComponent/>
        </div>
    );
}

export default App;
