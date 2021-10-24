import { createSlice } from '@reduxjs/toolkit'

export const logSignReducer = createSlice({
    name: 'logSignReducer',
    initialState: {
        userInf: {
            email: 'ilya@gmail.com',
            password: '123456789'
        },
        loading: false,
    },
    reducers: {
        changeInpEmail: (state, action) => {
            state.userInf.email = action.payload
        },
        changeInpPass: (state, action) => {
            state.userInf.password = action.payload
        },
        logIn__START: (state) => {
            state.loading = true
        },
        logSign__SUCCESS: (state) => {
            state.loading = false
            alert('Congratulations!')
        },
        logSign__FAILURE: (state) => {
            state.loading = false
            alert('Error: try again')
        }
    }
})

export const { 
    logIn__START, 
    logSign__SUCCESS, 
    logSign__FAILURE,
    changeInpEmail,
    changeInpPass
} = logSignReducer.actions
