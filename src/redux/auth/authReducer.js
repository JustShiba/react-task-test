import { createSlice } from '@reduxjs/toolkit'


export const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        userInfInp: {
            email: '',
            password: '',
            nickName: '',
            phone: '',
            loading: false
        },
        personalInf: {},
        auth: false,
        sign: false,
        loading: false,
        errorInf: {
            error: false,
            errorText: ''
        }
    },
    reducers: {
        checkLogIn__START: () => {},

        checkLogIn__SUCCESS: (state, action) => {
            state.personalInf = action.payload
            state.auth = true
        },

        checkLogIn__FAILURE: (state, action) => {},
        
        logIn__START: (state, action) => {
            const { email, pass } = action.payload
            state.userInfInp.email = email
            state.userInfInp.password = pass
            state.loading = true
        },
        
        logIn__SUCCESS: (state, action) => {
            state.loading = false
            state.auth = true
            state.personalInf = action.payload
            state.userInfInp.email = ''
            state.userInfInp.password = ''
        },
        
        logIn__FAILURE: (state, action) => {
            state.loading = false
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },
        
        signUp__START: (state, action) => {
            const { email, pass } = action.payload
            state.userInfInp.email = email
            state.userInfInp.password = pass
            state.loading = true
        },
        
        signUp__SUCCESS: (state) => {
            state.sign = true
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            state.loading = false
        },
        
        signUp__FAILURE: (state, action) => {
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        logOutReducer: (state) => {
            state.auth = false
            state.firstAuth = false
        },
        
        getDataCurrentPersone__START: (state) => {
            state.loading = true
        },

        getDataCurrentPersone__SUCCESS: (state, action) => {
            state.loading = false
            state.personalInf = action.payload
        },

        getDataCurrentPersone__FAILURE: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        setNickPhone__START: (state, action) => {
            state.userInfInp.nickName = action.payload.nickname
            state.userInfInp.phone = action.payload.phone
            state.loading = true
        },

        setNickPhone__SUCCESS: (state) => {
            state.userInfInp.nickName = ''
            state.userInfInp.phone = ''
            state.loading = false
        },

        setNickPhone__FAILURE: (state, action) => {
            state.userInfInp.nickName = ''
            state.userInfInp.phone = ''
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        deleteUser__START: (state) => {
            state.loading = true
        },

        deleteUser__SUCCESS: (state) => {
            state.loading = false
            state.auth = false
            alert('Your acc was deleted')
        },

        deleteUser__FAILURE: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        clearPersInf: (state) => {
            state.personalInf = {}
        },

        updateUserPosts: (state, action) => {
            state.personalInf.posts = action.payload
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
    checkLogIn__START,
    checkLogIn__SUCCESS,
    checkLogIn__FAILURE,
    logIn__START, 
    logIn__SUCCESS, 
    logIn__FAILURE, 
    signUp__START,
    signUp__SUCCESS,
    signUp__FAILURE,
    logOutReducer,
    getDataCurrentPersone__START,
    getDataCurrentPersone__SUCCESS,
    getDataCurrentPersone__FAILURE,
    setNickPhone__START,
    setNickPhone__SUCCESS,
    setNickPhone__FAILURE,
    deleteUser__START,
    deleteUser__SUCCESS,
    deleteUser__FAILURE,
    clearPersInf,
    updateUserPosts,
    removeError
} = authReducer.actions
