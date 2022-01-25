const initialState: initialStateType = {
    cardPacks: [
        {
            _id: '',
            user_id: '',
            name: '',
            path: '',
            cardsCount: 0,
            grade: 0,// средняя оценка карточек
            shots: 0,// количество попыток
            rating: 0,// лайки
            type: '',// ещё будет "folder" (папка)
            created: '',
            updated: '',
            __v: 0
        },
    ],
    cardPacksTotalCount: 0, // количество колод
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 0,// выбранная страница
    pageCount: 0,// количество элементов на странице
}
type initialStateType = {
    cardPacks: [
        {
            _id: string
            user_id: string
            name: string
            path: string
            cardsCount: number
            grade: number
            shots: number
            rating: number
            type: string
            created: string
            updated: string
            __v: number
        },
    ],
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
}

export const cardsPacksReducer = (state: initialStateType, action: any) => {
    switch (action.type) {
        case '': {
            return {...state}
        }
        default:
            return state

    }

}