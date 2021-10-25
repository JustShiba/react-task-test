import { createSlice } from '@reduxjs/toolkit'

export const logSignReducer = createSlice({
    name: 'logSignReducer',
    initialState: {
        userInfInp: {
            email: 'newuser@gmail.com',
            password: '123456789',
            nickName: '',
            phone: ''
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
        },

        getDataCurrentUser__START: (state) => {
            state.loading = true
        },

        getDataCurrentUser__SUCCESS: (state, action) => {
            state.loading = false
            state.personalInf = action.payload
        },

        getDataCurrentUser__FAILURE: (state) => {
            state.loading = false
            alert('Error: try again')
        },

        changeNickInp: (state, action) => {
            state.userInfInp.nickName = action.payload
        },

        changePhoneInp: (state, action) => {
            state.userInfInp.phone = action.payload
        },

        setNick__START: (state) => {
            state.loading = true
        },

        setPhone__START: (state) => {
            state.loading = true
        },

        setNick__SUCCESS: (state) => {
            state.loading = false
        },

        setPhone__SUCCESS: (state) => {
            state.loading = false
        },

        setNick__FAILURE: (state) => {
            state.loading = false
            alert('Error: try again')
        },

        setPhone__FAILURE: (state) => {
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
    changeInpPass,
    getDataCurrentUser__START,
    getDataCurrentUser__SUCCESS,
    getDataCurrentUser__FAILURE,
    changeNickInp,
    changePhoneInp,
    setNick__START,
    setPhone__START,
    setNick__SUCCESS,
    setPhone__SUCCESS,
    setNick__FAILURE,
    setPhone__FAILURE
} = logSignReducer.actions
