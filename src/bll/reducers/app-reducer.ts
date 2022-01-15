const initialState={
    isLoading:false

}
type initialStateType={
    isLoading:boolean
}


export const appReducer=(state:initialStateType=initialState,action:setIsLoadingType)=>{
    switch (action.type){
        case'app-reducer/SET-IS-LOADING':{
            return {...state,isLoading:action.value}
        }
        default: return state
    }

}
export const setIsLoading=(value:boolean)=>{
    return {
        type:'app-reducer/SET-IS-LOADING',
        value
    } as const
}
type setIsLoadingType=ReturnType<typeof setIsLoading>