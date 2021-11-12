import { createSlice } from '@reduxjs/toolkit'


export const usersReducer = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        currentUserId: '',
        currentUserInf: {},
        otherUser: true,
        loading: false,
        errorInf: {
            error: false,
            errorText: ''
        }
    },
    reducers: {
        addUsers__START: (state) => {
            state.loading = true
        },

        addUsers__SUCCESS: (state, action) => {
            state.loading = false
            state.users = action.payload
        },

        addUsers__FAILURE: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        selectUserId: (state, action) => {
            state.currentUserId = action.payload
        },

        getDataCurrentUser__START: (state) => {
            state.loading = true
        },

        getDataCurrentUser__SUCCESS: (state, action) => {
            state.loading = false
            state.currentUserInf = action.payload
            state.otherUser = true
        },

        currentUserIsNotAuth: (state) => {
            state.otherUser = false
        },

        removeError: (state) => {
            state.errorInf = {
                error: false,
                errorText: ''
            }
        }
    }
})

export const { 
    addUsers__START, 
    addUsers__SUCCESS, 
    addUsers__FAILURE,
    selectUserId,
    getDataCurrentUser__START,
    getDataCurrentUser__SUCCESS,
    currentUserIsNotAuth,
    removeError
} = usersReducer.actions
