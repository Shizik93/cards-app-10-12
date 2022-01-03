import {applyMiddleware, combineReducers, createStore} from "redux";
import {errorReducer} from "./reducers/error-reducer";
import {loginReducer} from "./reducers/login-reducer";
import {profileReducer} from "./reducers/profile-reducer";
import {registrationReducer} from "./reducers/registration-reducer";
import {restorePasswordReducer} from "./reducers/restorePassword-reducer";
import thunkMiddleware from 'redux-thunk'

const rootReducer=combineReducers({
    error:errorReducer,
    login:loginReducer,
    profile:profileReducer,
    registration:registrationReducer,
    restorePassword:restorePasswordReducer
})
export const store=createStore(rootReducer,applyMiddleware(thunkMiddleware))
export type AppRootStateType=ReturnType<typeof rootReducer>

//@ts-ignore

window.store = store