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

        addUsersSuccess: (state, action) => {
            state.loading = false
        },

        apiCallUsers: () => {},

        selectUserId: (state, action) => {
            state.currentUserId = action.payload
        },

        getDataCurrentUser__SUCCESS: (state, action) => {
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
    selectUserId,
    getDataCurrentUser__SUCCESS,
    currentUserIsNotAuth
} = usersReducer.actions
