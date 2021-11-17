import { createSlice } from '@reduxjs/toolkit'


export const usersReducer = createSlice({
    name: 'usersSlice',
    initialState: {
        users: [],
        currentUserId: '',
        currentUserInformation: {},
        isOtherUser: true,
        loading: false,
        errorInformation: {
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
            state.errorInformation.error = true
            state.errorInformation.errorText = action.payload
        },

        selectUserId: (state, action) => {
            state.currentUserId = action.payload
        },

        getDataCurrentUserStart: (state) => {
            state.loading = true
        },

        getDataCurrentUserSuccess: (state, action) => {
            state.loading = false
            state.currentUserInformation = action.payload
            state.isOtherUser = true
        },

        currentUserIsNotAuth: (state) => {
            state.isOtherUser = false
        },

        removeError: (state) => {
            state.errorInformation = {
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
