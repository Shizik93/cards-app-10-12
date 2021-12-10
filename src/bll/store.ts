import {applyMiddleware, combineReducers, createStore} from "redux";
import {errorReducers} from "./reducers/error-reducers";
import {loginReducers} from "./reducers/login-reducers";
import {newPasswordReducers} from "./reducers/newPassword-reducers";
import {profileReducers} from "./reducers/profile-reducers";
import {registrationReducers} from "./reducers/registration-reducers";
import {restorePasswordReducers} from "./reducers/restorePassword-reducers";
import thunkMiddleware from 'redux-thunk'

const rootReducer=combineReducers({
    error:errorReducers,
    login:loginReducers,
    newPassword:newPasswordReducers,
    profile:profileReducers,
    registration:registrationReducers,
    restorePassword:restorePasswordReducers
})
export const store=createStore(rootReducer,applyMiddleware(thunkMiddleware))
export type AppRootStateType=ReturnType<typeof rootReducer>