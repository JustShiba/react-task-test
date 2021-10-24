import { createSlice } from '@reduxjs/toolkit'

export const usersReducer = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
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
        check: () => { console.log(`it's working~`);}
    }
})

export const { 
    addUsers, 
    apiCallUsers, 
    addUsersSuccess, 
    check 
} = usersReducer.actions
