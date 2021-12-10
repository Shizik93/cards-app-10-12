import React from 'react';
import './App.css';
import {Test} from './pages/Test/Test';
import {Route, Routes} from "react-router-dom";
import {Error} from "./pages/Error";
import {Header, PATH} from "./pages/Header";
import {Login} from "./pages/Login";
import {NewPassword} from "./pages/NewPassword";
import {Profile} from "./pages/Profile";
import {Registration} from "./pages/Registration";
import {RestorePassword} from "./pages/RestorePassword";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route element={<Error/>} path={PATH.ERROR_404}/>
                 <Route element={<Login/>} path={PATH.LOGIN}/>
                 <Route element={<NewPassword/>} path={PATH.NEW_PASSWORD}/>
                 <Route element={<Profile/>} path={PATH.PROFILE}/>
                 <Route element={<Registration/>} path={PATH.REGISTRATION}/>
                 <Route element={<RestorePassword/>} path={PATH.RESTORE_PASSWORD}/>
                 <Route element={<Test/>} path={PATH.TEST}/>
                <Route element={<Error/>} path={'*'}/>

            </Routes>
        </div>
    );
}

export default App;
