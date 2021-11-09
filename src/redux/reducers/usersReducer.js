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

        localChangeComment__NONAUTH: (state, action) => {
            state.currentUserInf.posts[action.payload.postIndex]
                .comments[action.payload.commentIndex] = action.payload.comment
        },

        localAddComment__NONAUTH: (state, action) => {
            state.currentUserInf.posts[action.payload.postIndex].comments.push(action.payload.comment)
        },

        localDeleteComment__NONAUTH: (state, action) => {
            const { postIndex, commentIndex } = action.payload
            delete state.currentUserInf.posts[postIndex].comments[commentIndex]
        }
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
    localChangeComment__NONAUTH,
    localAddComment__NONAUTH,
    localDeleteComment__NONAUTH
} = usersReducer.actions
