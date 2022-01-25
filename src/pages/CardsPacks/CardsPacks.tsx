import {useEffect} from "react";
import {CardsPacksAPI} from "../../API/CardsPacksAPI";
import style from './CardsPacks.module.css'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import {SuperDoubleRange} from "../../common/c8-SuperDoubleRange/SuperDoubleRange";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";

export const CardsPacks = () => {
    /*    useEffect(()=>{
            CardsPacksAPI.getCardsPacks().then((res)=>console.dir(res))
        },[])*/
    return (
        <div>
            <div className={style.cardsPacksContainer}>
                <div style={{width: '243', background: '#ECECF9', borderRadius: '8px 0 0 8px'}}>
                    <div className={style.settingsPacks}>
                        <div><span>Show packs cards</span></div>
                        <div className={style.settingsButtons}>
                            <SuperButton style={{background: '#FFFFFF', color: 'black'}}>My</SuperButton>
                            <SuperButton>All</SuperButton>
                        </div>
                        <div>
                            <span>Number of cards</span>
                        </div>
                        <div>
                            <SuperDoubleRange/>
                        </div>
                    </div>
                </div>
                <div style={{width:'765px',display:'flex',justifyContent:'center'}}>
                    <div className={style.packsList}>
                        <div>
                            <h2>Packs List</h2>
                        </div>
                        <div style={ {width:'100%', display:"flex",justifyContent:'space-around'}}>
                            <SuperInputText placeholder={'Search...'} className={style.superInput}/>
                            <SuperButton style={{width: '184px', height: '36px'}}>Add new pack</SuperButton>
                        </div>
                        <div>

                        </div>
                        <div>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>Show</span>
                            <SuperRadio/>
                            <span>Cards per Page</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}