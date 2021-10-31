import { createSlice } from '@reduxjs/toolkit'

export const usersReducer = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        currentUserId: '',
        currentUserInf: {},
        otherUser: true,
        loading: false,
    },
    reducers: {
        addUsers: (state, action) => {
            state.loading = true
            state.users = action.payload
        },

        addUsersSuccess: (state) => {
            state.loading = false
        },

        apiCallUsers: () => {},

        selectUserId__START: (state, action) => {
            state.loading = true
            state.currentUserId = action.payload
        },

        selectUserId__FINISH: (state) => {
            state.loading = false
        },

        getDataCurrentUser__START: (state, action) => {
            state.loading = true
            state.currentUserInf = action.payload
        },

        getDataCurrentUser__SUCCESS: (state, action) => {
            state.loading = false
            state.currentUserInf = action.payload
            state.otherUser = true
        },

        currentUserIsNotAuth: (state, action) => {
            state.otherUser = false
        },

    }
})

export const { 
    addUsers, 
    apiCallUsers, 
    addUsersSuccess, 
    selectUserId__START,
    selectUserId__FINISH,
    getDataCurrentUser__START,
    getDataCurrentUser__SUCCESS,
    currentUserIsNotAuth,
    // loading__START,
    // loading__FINISH,
} = usersReducer.actions
