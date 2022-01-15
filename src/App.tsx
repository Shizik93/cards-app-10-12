import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./Header/Header";

import {RouteComponent} from './RouteComponent/RouteComponent';
import {useDispatch, useSelector} from "react-redux";
import {authMeTC} from "./bll/reducers/login-reducer";
import {AppRootStateType} from "./bll/store";
import {Preloader} from "./pages/Preloader/Preloader";

function App() {
    const isLoading = useSelector((state: AppRootStateType) => state.app.isLoading)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(authMeTC())

    }, [dispatch])

    return (<div>
            {isLoading && <Preloader/>}
            <div className="App">
                <Header/>
                <RouteComponent/>
            </div>
        </div>
    );
}

export default App;
