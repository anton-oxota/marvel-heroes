import request from "./request";

const API_KEY = '39d2925a06e078bd13a8e8f84fd20e34';
const API_BASE_URL = 'https://gateway.marvel.com:443/v1/';



async function getCharacterById(id) {
    const characterData = await request(`${API_BASE_URL}public/characters/${id}?apikey=${API_KEY}`);
    return tranformCharData(characterData.data.results[0])
}

async function getCharacterByName(name) {
    const characterData = await request(`${API_BASE_URL}public/characters?name=${name}&apikey=${API_KEY}`)
    return tranformCharData(characterData.data.results[0])
}

async function getCharacters(offset = 0, limit = 12) {
    const charactersData = await request(`${API_BASE_URL}public/characters?limit=${limit}&offset=${offset}&apikey=${API_KEY}`)
    return charactersData.data.results.map(tranformCharData)
}

async function getComics(offset = 0, limit = 20) {
    const comicsData = await request(`${API_BASE_URL}public/comics?limit=${limit}&offset=${offset}&apikey=${API_KEY}`)
    return comicsData.data.results.map(tranformComicData)
}

async function getComicById(id) {
    const comicData = await request(`${API_BASE_URL}public/comics/${id}?apikey=${API_KEY}`)
    return tranformComicData(comicData.data.results[0])
}

export { getCharacterById, getCharacterByName, getCharacters, getComics, getComicById }


function tranformCharData(data) {
    return {
        id: data.id,
        name: data.name,
        img: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        description: data.description ? data.description : 'This character hasn\'t description',
        detailsUrl: data.urls[0].url,
        wikiUrl: data.urls[1].url,
        comics: data.comics.items
    }
}

function tranformComicData(data) {
    return {
        id: data.id,
        title: data.title,
        img: `${data.thumbnail.path}.${data.thumbnail.extension}`,
        price: data.prices[0].price ? `${data.prices[0].price}$` : 'NOT AVAILABLE',
        description: data.description ? data.description : 'This comic has no description',
        language: data?.textObjects[0]?.language,
        pageCount: data.pageCount,

    }
}