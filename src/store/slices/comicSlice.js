import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { getComicById, getComics } from "../../services/marvelApi";


const createComicSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator }
})

const comicSlice = createComicSlice({
    name: 'comic',
    initialState: {

        comicsOffset: 0,
        comicsData: [],
        fetchComicsStatus: 'idle',


        comicData: null,
        fetchComicStatus: 'idle'
    },
    reducers: (create) => ({
        fetchComics: create.asyncThunk(
            async (_, { getState }) => {
                return getComics(getState().comicReducer.comicsOffset);
            }, {
            pending: (state) => {
                state.fetchComicsStatus = 'pending';
            },
            fulfilled: (state, action) => {
                state.fetchComicsStatus = 'fulfilled';
                state.comicsData.push(...action.payload);
            },
            rejected: (state) => {
                state.fetchComicsStatus = 'rejected';
            }
        }
        ),
        fetchComic: create.asyncThunk(
            async ({ id }) => {
                return getComicById(id)
            }, {
            pending: (state) => {
                state.fetchComicStatus = 'pending'
            },
            fulfilled: (state, aciton) => {
                state.comicData = aciton.payload;
                state.fetchComicStatus = 'fulfilled'
            },
            rejected: (state) => {
                state.fetchComicStatus = 'rejected'
            }
        }
        ),
        changeComicsOffset: create.reducer((state, action) => {
            state.comicsOffset += action.payload
        })

    })
})

const comicReducer = comicSlice.reducer;
export default comicReducer

export const { fetchComics, fetchComic, changeComicsOffset } = comicSlice.actions