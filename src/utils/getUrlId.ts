import { SWAPI_PEOPLE, IMAGE_PERSON_URL, IMAGE_EXTENSION, API_PEOPLE } from '../constants/api'

export const getUrlId = (url: string, category: string) => {
    var id = url.match(/\/(\d+)+[\/]?/g)?.join(' ').replaceAll('/', '') // удаляем url, оставляем id
    return id
}

export const getPeopleId = (url: string) => getUrlId(url, SWAPI_PEOPLE)
export const getPeopleImage = (id: string) => `${IMAGE_PERSON_URL}/${id + IMAGE_EXTENSION}`

// получение полного url, превращаем ег в пустую строку, оставляем id, делаем id числом
export const getPeoplePageId = (url: string) => {
    return Number(url.replace(API_PEOPLE, '')) // удаляем url, оставляем id для пагинации
}
