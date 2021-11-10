import { createSlice } from '@reduxjs/toolkit'


export const authReducer = createSlice({
    name: 'authReducer',
    initialState: {
        userInfInp: {
            email: '',
            password: '',
            nickName: '',
            phone: ''
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
    updateUserPosts,
    localChangeComment__AUTH,
    localAddComment__AUTH,
    localDeleteComment__AUTH
} = authReducer.actions
