export const HTTP = 'http://'
export const HTTPS = 'https://'

export const SWAPI_ROOT = 'https://swapi.dev/api/' // base url
export const SWAPI_PEOPLE = 'people'
export const SWAPI_PEOPLE_PAGE = '/?page='
export const SWAPI_SEARCH = '/?search='

export const API_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PEOPLE_PAGE

// images
const IMAGE_ROOT = 'https://starwars-visualguide.com/assets/img/'
const IMAGE_PEOPLE = 'characters'
export const IMAGE_EXTENSION = '.jpg'

export const IMAGE_PERSON_URL = IMAGE_ROOT + IMAGE_PEOPLE

// single people
export const SINGLE_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE

// search
export const SEARCH_PEOPLE = SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_SEARCH