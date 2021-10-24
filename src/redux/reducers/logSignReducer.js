import { createSlice } from '@reduxjs/toolkit'

export const logSignReducer = createSlice({
    name: 'logSignReducer',
    initialState: {
        userInfInp: {
            email: 'newuser@gmail.com',
            password: '123456789'
        },
        personalInf: {},
        auth: false,
        loading: false,
    },
    reducers: {
        changeInpEmail: (state, action) => {
            state.userInfInp.email = action.payload
        },
        changeInpPass: (state, action) => {
            state.userInfInp.password = action.payload
        },
        logIn__START: (state) => {
            state.loading = true
        },
        signUp__START: (state) => {
            state.loading = true
        },
        logSign__SUCCESS: (state, action) => {
            state.loading = false
            state.auth = true
            state.personalInf = action.payload
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
    signUp__START,
    logSign__SUCCESS, 
    logSign__FAILURE,
    changeInpEmail,
    changeInpPass
} = logSignReducer.actions
