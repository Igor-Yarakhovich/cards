import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

// api

export const packAPI = {
    getPack(userId: string) {
        return instance.get<PacksResponseType>('cards/pack', {params: {userId}})
    },
    createPack() {
        return instance.post<NewCardsPackType>('cards/pack', {cardsPack:{name:'4oKavoNaNa'}})
    },
    deletePack(packId: string){
        return instance.delete<PacksResponseType>('cards/pack', {params: {id: packId}})
    }
}

export type CardsPackType = {
    name?: string // если не отправить будет таким
    path?: string // если не отправить будет такой
    grade?: number // не обязателен
    shots?: number // не обязателен
    rating?: number // не обязателен
    deckCover?: string // не обязателен
    private?: boolean // если не отправить будет такой
    type?: string // если не отправить будет таким
}
export type NewCardsPackType ={
    newCardsPack: PackUserType
    token: string,
    tokenDeathTime: number
}
export type PackUserType = {
    _id: string
    user_id: string
    name: string
    path: string // папка
    cardsCount: number
    grade: number // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string // ещё будет "folder" (папка)
    created: string
    updated: string
    __v: number
}
export type PacksResponseType = {
    cardPacks: Array<PackUserType>,
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}