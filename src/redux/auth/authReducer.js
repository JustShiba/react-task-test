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
        firstAuth: true,
        auth: false,
        sign: false,
        loading: false,
    },
    reducers: {
        checkLogIn__START: () => {},

        checkLogIn__SUCCESS: (state, action) => {
            state.personalInf = action.payload
            state.auth = true
        },

        checkLogIn__FAILURE: (state, action) => {
            state.firstAuth = false
        },
        
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
        
        logIn__FAILURE: (state) => {
            state.loading = false
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            alert('Error: try again')
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
        
        signUp__FAILURE: (state) => {
            state.userInfInp.email = ''
            state.userInfInp.password = ''
            state.loading = false
            alert('Error: try again')
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

        getDataCurrentPersone__FAILURE: (state) => {
            state.loading = false
            alert('Error: try again')
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

        setNickPhone__FAILURE: (state) => {
            state.userInfInp.nickName = ''
            state.userInfInp.phone = ''
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
        },

        localChangeComment__AUTH: (state, action) => {
            state.personalInf.posts[action.payload.postIndex]
                .comments[action.payload.commentIndex] = action.payload.comment
        },

        localAddComment__AUTH: (state, action) => {
            state.personalInf.posts[action.payload.postIndex].comments.push(action.payload.comment)
        },

        localDeleteComment__AUTH: (state, action) => {
            const { postIndex, commentIndex } = action.payload
            delete state.personalInf.posts[postIndex].comments[commentIndex]
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
    localChangeComment__AUTH,
    localAddComment__AUTH,
    localDeleteComment__AUTH
} = authReducer.actions
