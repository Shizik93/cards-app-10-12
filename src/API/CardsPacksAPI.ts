import {initial} from "./InitialData";

type ParamsType={
    page:number
    pageCount:number
    sortPacks:string
    user_id:string
    packName:string
}

export const CardsPacksAPI = {
    getCardsPacks(){
        return  initial.get('cards/pack',{})
    }

}