import { createSlice } from '@reduxjs/toolkit'

export const usersReducer = createSlice({
    name: 'usersSlice',
    initialState: {
        posts: [],
        loading: false,
        error: false
    },
    reducers: {
        addUsers: (state, action) => {
            state.loading = true
            state.posts.push(...action.payload)
        },
        addUsersSuccess: (state, action) => {
            state.loading = false
        },
        apiCallUsers: () => {}
    }
})

export const { addUsers, apiCallUsers, addUsersSuccess } = usersReducer.actions
