import { createSlice } from '@reduxjs/toolkit'


export const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        userInformationInput: {
            email: '',
            password: '',
            nickName: '',
            phone: '',
            loading: false
        },
        personalInformationUser: {},
        isAuthorized: false,
        isSignUp: false,
        loading: false,
        errorInformation: {
            error: false,
            errorText: ''
        }
    },
    reducers: {
        checkLogInStart: () => {},

        checkLogInSuccess: (state, action) => {
            state.personalInformationUser = action.payload
            state.isAuthorized = true
        },

        logInStart: (state, action) => {
            const { email, password } = action.payload
            state.userInformationInput.email = email
            state.userInformationInput.password = password
            state.loading = true
        },
        
        logInSuccess: (state, action) => {
            state.loading = false
            state.isAuthorized = true
            state.personalInformationUser = action.payload
            state.userInformationInput.email = ''
            state.userInformationInput.password = ''
        },
        
        logInFailure: (state, action) => {
            state.loading = false
            state.userInformationInput.email = ''
            state.userInformationInput.password = ''
            state.errorInformation.error = true
            state.errorInformation.errorText = action.payload
        },
        
        signUpStart: (state, action) => {
            const { email, password } = action.payload
            state.userInformationInput.email = email
            state.userInformationInput.password = password
            state.loading = true
        },
        
        signUpSuccess: (state) => {
            state.isSignUp = true
            state.userInformationInput.email = ''
            state.userInformationInput.password = ''
            state.loading = false
        },
        
        signUpFailure: (state, action) => {
            state.userInformationInput.email = ''
            state.userInformationInput.password = ''
            state.loading = false
            state.errorInformation.error = true
            state.errorInformation.errorText = action.payload
        },

        logOutReducer: (state) => {
            state.isAuthorized = false
            state.firstAuth = false
        },
        
        getDataCurrentPersonStart: (state) => {
            state.loading = true
        },

        getDataCurrentPersonSuccess: (state, action) => {
            state.loading = false
            state.personalInformationUser = action.payload
        },

        getDataCurrentPersonFailure: (state, action) => {
            state.loading = false
            state.errorInformation.error = true
            state.errorInformation.errorText = action.payload
        },

        setNickPhoneStart: (state, action) => {
            state.userInformationInput.nickName = action.payload.nickname
            state.userInformationInput.phone = action.payload.phone
            state.loading = true
        },

        setNickPhoneSuccess: (state) => {
            state.userInformationInput.nickName = ''
            state.userInformationInput.phone = ''
            state.loading = false
        },

        setNickPhoneFailure: (state, action) => {
            state.userInformationInput.nickName = ''
            state.userInformationInput.phone = ''
            state.loading = false
            state.errorInformation.error = true
            state.errorInformation.errorText = action.payload
        },

        deleteUserStart: (state) => {
            state.loading = true
        },

        deleteUserSuccess: (state) => {
            state.loading = false
            state.isAuthorized = false
        },

        deleteUserFailure: (state, action) => {
            state.loading = false
            state.errorInformation.error = true
            state.errorInformation.errorText = action.payload
        },

        clearPersInf: (state) => {
            state.personalInformationUser = {}
        },

        updateUserPosts: (state, action) => {
            state.personalInformationUser.posts = action.payload
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
    checkLogInStart,
    checkLogInSuccess,
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
