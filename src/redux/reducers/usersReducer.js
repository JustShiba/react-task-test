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

        selectUserId: (state, action) => {
            state.currentUserId = action.payload
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

        currentUserIsNotAuth: (state) => {
            state.otherUser = false
        },

    }
})

export const { 
    addUsers, 
    apiCallUsers, 
    addUsersSuccess, 
    selectUserId,
    getDataCurrentUser__START,
    getDataCurrentUser__SUCCESS,
    currentUserIsNotAuth,
    // loading__START,
    // loading__FINISH,
} = usersReducer.actions
