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
        checkLogInStart: () => {},

        checkLogInSuccess: (state, action) => {
            state.personalInf = action.payload
            state.auth = true
        },

        checkLogInFailure: (state, action) => {},
        
        logInStart: (state, action) => {
            const { email, pass } = action.payload
            state.userInfInp.email = email
            state.userInfInp.password = pass
            state.loading = true
        },
        
        logInSuccess: (state, action) => {
            state.loading = false
            state.auth = true
            state.personalInf = action.payload
            state.userInfInp.email = ''
            state.userInfInp.password = ''
        },
        
        logInFailure: (state, action) => {
            state.loading = false
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },
        
        signUpStart: (state, action) => {
            const { email, pass } = action.payload
            state.userInfInp.email = email
            state.userInfInp.password = pass
            state.loading = true
        },
        
        signUpSuccess: (state) => {
            state.sign = true
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            state.loading = false
        },
        
        signUpFailure: (state, action) => {
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
        
        getDataCurrentPersonStart: (state) => {
            state.loading = true
        },

        getDataCurrentPersonSuccess: (state, action) => {
            state.loading = false
            state.personalInf = action.payload
        },

        getDataCurrentPersonFailure: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        setNickPhoneStart: (state, action) => {
            state.userInfInp.nickName = action.payload.nickname
            state.userInfInp.phone = action.payload.phone
            state.loading = true
        },

        setNickPhoneSuccess: (state) => {
            state.userInfInp.nickName = ''
            state.userInfInp.phone = ''
            state.loading = false
        },

        setNickPhoneFailure: (state, action) => {
            state.userInfInp.nickName = ''
            state.userInfInp.phone = ''
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        deleteUserStart: (state) => {
            state.loading = true
        },

        deleteUserSuccess: (state) => {
            state.loading = false
            state.auth = false
        },

        deleteUserFailure: (state, action) => {
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
    checkLogInStart,
    checkLogInSuccess,
    checkLogInFailure,
    logInStart, 
    logInSuccess, 
    logInFailure, 
    signUpStart,
    signUpSuccess,
    signUpFailure,
    logOutReducer,
    getDataCurrentPersonStart,
    getDataCurrentPersonSuccess,
    getDataCurrentPersonFailure,
    setNickPhoneStart,
    setNickPhoneSuccess,
    setNickPhoneFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
    clearPersInf,
    updateUserPosts,
    removeError
} = authReducer.actions
