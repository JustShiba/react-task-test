import { createSlice } from '@reduxjs/toolkit'

export const usersReducer = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        currentUserId: '',
        currentUser: {},
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
    }
})

export const { 
    addUsers, 
    apiCallUsers, 
    addUsersSuccess, 
    selectUserId
} = usersReducer.actions
