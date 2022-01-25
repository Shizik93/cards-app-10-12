import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import style from './NewPassword.module.css'
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {newPasswordTC} from "../../bll/reducers/restorePassword-reducer";
import {useState} from "react";
import {useParams} from "react-router-dom";

export const NewPassword = () => {


    const dispatch = useDispatch()
    const newPass = useSelector((state: AppRootStateType) => state.restorePassword.newPass)
    const [newPassword, setNewPassword] = useState('')
    const onChangeNewPassword = (e: React.FormEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)

    }
    const {tokenId} = useParams()
    return (
        <div>
            <div className={style.newPassword}>
                <h1>It-incubator</h1>
                <h2>Create new password</h2>
                <div><SuperInputText defaultValue={newPassword} onChange={onChangeNewPassword} type={'password'} placeholder={'Password'}/></div>
                <div className={style.text}>
                    <span>Create new password and we will send you further instructions to email</span></div>
                <SuperButton
                    className={style.superButton}
                    onClick={() => {
                    if (tokenId)
                        dispatch(newPasswordTC(newPassword, tokenId))
                }}>Create new password</SuperButton>
            </div>
        </div>
    )
}