import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

// api

export const packAPI = {
    getPack() {
        return instance.get<PacksResponseType>('cards/pack')
    },

    createPack(newCard: CardsPackType) {
        return instance.post<CardsPackType>('cards/pack', {newCard})
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

export type PacksResponseType = {
    cardPacks: [
        {
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
        },
    ]
    cardPacksTotalCount: number // количество колод
    maxCardsCount: number
    minCardsCount: number
    page: number // выбранная страница
    pageCount: number // количество элементов на странице
}