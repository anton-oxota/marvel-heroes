import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";
import { getCharacterById, getCharacterByName, getCharacters } from "../../services/marvelApi";


const createCharSlice = buildCreateSlice({
    creators: { asyncThunk: asyncThunkCreator }
})

const charSlice = createCharSlice({
    name: 'character',
    initialState: {
        randomCharData: null,
        randomCharStatus: 'idle',

        charactersOffset: 0,
        characters: [],
        charactersStatus: 'idle',

        selectedCharId: null,
        selectedCharData: null,
        selectedCharStatus: 'idle',

        findCharacterData: null,
        findCharacterStatus: 'idle',

        charInfoModal: false
    },
    reducers: (create) => ({
        fetchRandomCharacter: create.asyncThunk(
            async () => {
                const id = Math.floor(Math.random() * (1011400 - 1010800) + 1011000)
                return getCharacterById(id)
            }
            , {
                pending: (state) => {
                    state.randomCharStatus = 'pending';
                },
                fulfilled: (state, action) => {
                    state.randomCharStatus = 'fulfilled';
                    state.randomCharData = action.payload;
                },
                rejected: (state) => {
                    state.randomCharStatus = 'rejected';
                    state.randomCharData = null
                }
            }
        ),

        fetchCharacterById: create.asyncThunk(
            async ({ id }) => {
                return getCharacterById(id)
            }, {
            pending: (state) => {
                state.selectedCharStatus = 'pending';
            },
            fulfilled: (state, action) => {
                state.selectedCharData = action.payload;
                state.selectedCharStatus = 'fulfilled'
            },
            rejected: (state) => {
                state.selectedCharStatus = 'rejected';
            }
        }
        ),

        fetchCharacterByName: create.asyncThunk(
            async ({ name }) => {
                return getCharacterByName(name)
            },
            {
                pending: (state) => {
                    state.findCharacterStatus = 'pending'
                },
                fulfilled: (state, action) => {
                    state.findCharacterStatus = 'fulfilled';
                    state.findCharacterData = action.payload;
                },
                rejected: (state) => {
                    state.findCharacterStatus = 'rejected'
                }
            }
        ),

        fetchCharacters: create.asyncThunk(
            async (_, { getState }) => {
                return getCharacters(getState().charReducer.charactersOffset)
            }
            , {
                pending: (state) => {
                    state.charactersStatus = 'pending'
                },
                fulfilled: (state, action) => {
                    state.charactersStatus = 'fulfilled';
                    state.characters.push(...action.payload);
                },
                rejected: (state) => {
                    state.charactersStatus = 'rejected'
                }
            }
        ),
        selectChar: create.reducer((state, action) => {
            state.selectedCharId = action.payload
        }),
        changeCharactersOffset: create.reducer((state, action) => {
            state.charactersOffset += action.payload
        }),
        changeFindCharacterStatus: create.reducer((state, action) => {
            state.findCharacterStatus = action.payload
        }),
        resetSelectedCharInitialState: create.reducer((state) => {
            state.selectedCharData = null
            state.selectedCharId = null
            state.selectedCharStatus = 'idle'
        }),
        changeCharInfoModal: create.reducer((state, action) => {
            state.charInfoModal = action.payload
        })
    })
})

const charReducer = charSlice.reducer;
export default charReducer;

export const { fetchRandomCharacter,
    fetchCharacterById,
    fetchCharacterByName,
    fetchCharacters,
    selectChar,
    changeCharactersOffset,
    changeFindCharacterStatus,
    resetSelectedCharInitialState,
    changeCharInfoModal } = charSlice.actions