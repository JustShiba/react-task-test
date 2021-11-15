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
        addUsersStart: (state) => {
            state.loading = true
        },

        addUsersSuccess: (state, action) => {
            state.loading = false
            state.users = action.payload
        },

        addUsersFailure: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        selectUserId: (state, action) => {
            state.currentUserId = action.payload
        },

        getDataCurrentUserStart: (state) => {
            state.loading = true
        },

        getDataCurrentUserSuccess: (state, action) => {
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
    addUsersStart, 
    addUsersSuccess, 
    addUsersFailure,
    selectUserId,
    getDataCurrentUserStart,
    getDataCurrentUserSuccess,
    currentUserIsNotAuth,
    removeError
} = usersReducer.actions
