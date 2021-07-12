import { HTTP, HTTPS } from "constants/api"

export const changeHttp = (url: string) => {
    return url ? url.replace(HTTP, HTTPS) : url
}

export const getApiResource = async (url: string) => {
    try {
        const res = await fetch(url)
        if (res.status < 400) {
            const data = await res.json()
            return data
        }
    } catch (err) {
        console.log('error: ', err)
    }
}

// приходит массив url, перебираем в map и отправляем запрос на каждый url
export const makeConcurrentRequest = async (url: any) => {
    const res = await Promise.all(url.map((res: any) => {
        return fetch(res).then(res => res.json())
    }))
    return res
}