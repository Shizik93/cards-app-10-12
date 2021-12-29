import {Navigate, Route, Routes} from "react-router-dom";
import {PATH} from "../Header/Header";
import {Error} from "../pages/Error/Error";
import {Login} from "../pages/Login/Login";
import {NewPassword} from "../pages/NewPassword/NewPassword";
import {Profile} from "../pages/Profile/Profile";
import {Registration} from "../pages/Registration/Registration";
import {Test} from "../pages/Test/Test";
import {CheckEmail} from "../pages/CheckEmail/CheckEmail";
import React from "react";

export const RouteComponent = () => {
    return (
        <div>
            <Routes>
            <Route path={'/'} element={<Navigate to={PATH.LOGIN}/>}/>
            <Route element={<Error/>} path={PATH.ERROR_404}/>
            <Route element={<Login/>} path={PATH.LOGIN}/>
            <Route element={<NewPassword/>} path={PATH.NEW_PASSWORD}/>
            <Route element={<Profile/>} path={PATH.PROFILE}/>
            <Route element={<Registration/>} path={PATH.REGISTRATION}/>
            <Route element={<Test/>} path={PATH.TEST}/>
            <Route element={<CheckEmail/>} path={PATH.CHECK_EMAIL}/>
            <Route element={<Error/>} path={'*'}/>


        </Routes></div>
    )
}
