import { createSlice } from '@reduxjs/toolkit'


export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        postCreateInp: {
            title: '',
            body: '',
            loading: false
        },
        allPosts: [],
        selectedId: '',
        postChangeInf: {},
        commentSendInf: {},
        commentDeletInf: {},
        commentChangeInf: {},
        loading: false,
        errorInf: {
            error: false,
            errorText: ''
        }
    },
    reducers: {
        createPostStart: (state, action) => {
            state.postCreateInp.loading = true
            state.postCreateInp.title = action.payload.title
            state.postCreateInp.body = action.payload.body
        },

        createPostSuccess: (state) => {
            state.postCreateInp.loading = false
            state.postCreateInp.title = ''
            state.postCreateInp.body = ''
        },

        createPostFailure: (state, action) => {
            state.postCreateInp.loading = false
            state.postCreateInp.title = ''
            state.postCreateInp.body = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        getAllPostsStart: (state) => {
            state.loading = true
        },

        getAllPostsSuccess: (state, action) => {
            state.loading = false
            state.allPosts = action.payload
        },

        getAllPosts__FAILRE: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        getCurrentUserPostsStart: (state) => {
            state.loading = true
        },
        
        getCurrentUserPostsSuccess: (state) => {
            state.loading = false
        },
        
        getCurrentUserPostsFailure: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        deletePostStart: (state, action) => {
            state.loading = true
            state.selectedId = action.payload
        },

        deletePostSuccess: (state) => {
            state.loading = false
            state.selectedId = ''
        },

        deletePostFailure: (state, action) => {
            state.loading = false
            state.selectedId = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        changePostInfStart: (state, action) => {
            state.loading = true
            state.postChangeInf = action.payload
        },

        changePostInfSuccess: (state) => {
            state.loading = false
            state.postChangeInf = {}
        },

        changePostInfFailure: (state, action) => {
            state.loading = false
            state.postChangeInf = {}
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        sendCommentStart: (state, action) => {
            state.loading = true
            state.commentSendInf = action.payload
        },

        sendCommentSuccess: (state) => {
            state.loading = false
            state.commentSendInf = ''
        },

        sendCommentFailure: (state, action) => {
            state.loading = false
            state.commentSendInf = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        deleteCommentStart: (state, action) => {
            state.loading = true
            state.commentDeletInf = action.payload
        },

        deleteCommentSuccess: (state) => {
            state.loading = false
            state.commentDeletInf = {}
        },

        deleteCommentFailure: (state, action) => {
            state.loading = false
            state.commentDeletInf = {}
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        changeCommentStart: (state, action) => {
            state.loading = true
            state.commentChangeInf = action.payload
        },
        
        changeCommentSuccess: (state) => {
            state.loading = false
            state.commentChangeInf = {}
        },

        changeCommentFailure: (state, action) => {
            state.loading = false
            state.commentChangeInf = {}
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
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
    createPostStart,
    createPostSuccess,
    createPostFailure,
    getAllPostsStart,
    getAllPostsSuccess,
    getAllPostsFailure,
    deletePostStart,
    deletePostSuccess,
    deletePostFailure,
    getCurrentUserPostsStart,
    getCurrentUserPostsSuccess,
    getCurrentUserPostsFailure,
    changePostInfStart,
    changePostInfSuccess,
    changePostInfFailure,
    sendCommentStart,
    sendCommentSuccess,
    sendCommentFailure,
    deleteCommentStart,
    deleteCommentSuccess,
    deleteCommentFailure,
    changeCommentStart,
    changeCommentSuccess,
    changeCommentFailure,
    removeError
} = postsReducer.actions
