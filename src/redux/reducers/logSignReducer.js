import { createSlice } from '@reduxjs/toolkit'

export const logSignReducer = createSlice({
    name: 'logSignReducer',
    initialState: {
        userInfInp: {
            email: '',
            password: '',
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
        },

        logSign__FAILURE: (state) => {
            state.loading = false
            alert('Error: try again')
        },

        getDataCurrentPersone__START: (state) => {
            state.loading = true
        },

        getDataCurrentPersone__SUCCESS: (state, action) => {
            state.loading = false
            state.personalInf = action.payload
        },

        getDataCurrentPersone__FAILURE: (state) => {
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
        },

        deleteUser__START: (state) => {
            state.loading = true
        },

        deleteUser__SUCCESS: (state) => {
            state.loading = false
            state.auth = false
            alert('Your acc was deleted')
        },

        deleteUser__FAILURE: (state) => {
            state.loading = false
            alert('Error: try again')
        },

        clearPersInf: (state) => {
            state.personalInf = {}
        },

        updateUserPosts: (state, action) => {
            state.personalInf.posts = action.payload
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
    getDataCurrentPersone__START,
    getDataCurrentPersone__SUCCESS,
    getDataCurrentPersone__FAILURE,
    changeNickInp,
    changePhoneInp,
    setNick__START,
    setPhone__START,
    setNick__SUCCESS,
    setPhone__SUCCESS,
    setNick__FAILURE,
    setPhone__FAILURE,
    deleteUser__START,
    deleteUser__SUCCESS,
    deleteUser__FAILURE,
    clearPersInf,
    updateUserPosts
} = logSignReducer.actions
