//  PEOPLE
export interface IPeople {
    count: number
    next: string
    previous: string
    results: IPeopleResults[]
}

interface IPeopleResults {
    birth_year: string
    created: string
    edited: string
    eye_color: string
    films: Array<string>
    gender: string
    hair_color: string
    height: string
    homeworld: string
    mass: string
    name: string
    skin_color: string
    species: []
    starships: Array<string>
    url: string
    vehicles: Array<string>
}

export interface IPeopleList {
    id: string | undefined
    image: string
    name: string
    url?: string
}

// SINGLE PEOPLE
export interface ISinglePeopleMovies {
    characters: Array<string>
    created: string
    director: string
    edited: string
    episode_id: number
    opening_crawl: string
    planets: Array<string>
    producer: string
    release_date: string
    species: Array<string>
    starships: Array<string>
    title: string
    url: string
    vehicles: Array<string>
}