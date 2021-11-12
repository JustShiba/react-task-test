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
        createPost__START: (state, action) => {
            state.postCreateInp.loading = true
            state.postCreateInp.title = action.payload.title
            state.postCreateInp.body = action.payload.body
        },

        createPost__SUCCESS: (state) => {
            state.postCreateInp.loading = false
            state.postCreateInp.title = ''
            state.postCreateInp.body = ''
        },

        createPost__FAILURE: (state, action) => {
            state.postCreateInp.loading = false
            state.postCreateInp.title = ''
            state.postCreateInp.body = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        getAllPosts__START: (state) => {
            state.loading = true
        },

        getAllPosts__SUCCESS: (state, action) => {
            state.loading = false
            state.allPosts = action.payload
        },

        getAllPosts__FAILRE: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        getCurrentUserPosts__START: (state) => {
            state.loading = true
        },
        
        getCurrentUserPosts__SUCCESS: (state) => {
            state.loading = false
        },
        
        getCurrentUserPosts__FAILURE: (state, action) => {
            state.loading = false
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        deletePost__START: (state, action) => {
            state.loading = true
            state.selectedId = action.payload
        },

        deletePost__SUCCESS: (state) => {
            state.loading = false
            state.selectedId = ''
        },

        deletePost__FAILURE: (state, action) => {
            state.loading = false
            state.selectedId = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        changePostInf__START: (state, action) => {
            state.loading = true
            state.postChangeInf = action.payload
        },

        changePostInf__SUCCESS: (state) => {
            state.loading = false
            state.postChangeInf = {}
        },

        changePostInf__FAILURE: (state, action) => {
            state.loading = false
            state.postChangeInf = {}
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        sendComment__START: (state, action) => {
            state.loading = true
            state.commentSendInf = action.payload
        },

        sendComment__SUCCESS: (state) => {
            state.loading = false
            state.commentSendInf = ''
        },

        sendComment__FAILURE: (state, action) => {
            state.loading = false
            state.commentSendInf = ''
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        deleteComment__START: (state, action) => {
            state.loading = true
            state.commentDeletInf = action.payload
        },

        deleteComment__SUCCESS: (state) => {
            state.loading = false
            state.commentDeletInf = {}
        },

        deleteComment__FAILURE: (state, action) => {
            state.loading = false
            state.commentDeletInf = {}
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        changeComment__START: (state, action) => {
            state.loading = true
            state.commentChangeInf = action.payload
        },
        
        changeComment__SUCCESS: (state) => {
            state.loading = false
            state.commentChangeInf = {}
        },

        changeComment__FAILURE: (state, action) => {
            state.loading = false
            state.commentChangeInf = {}
            state.errorInf.error = true
            state.errorInf.errorText = action.payload
        },

        localChangeComment__ALL: (state, action) => {
            state.allPosts[action.payload.postIndex]
                .comments[action.payload.commentIndex] = action.payload.comment
        },

        localAddComment__ALL: (state, action) => {
            const { postIndex, comment } = action.payload
            state.allPosts[postIndex].comments.push(comment)
        }, 

        localDeleteComment__ALL: (state, action) => {
            const { postIndex, commentIndex } = action.payload
            delete state.allPosts[postIndex].comments[commentIndex]
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
    createPost__START,
    createPost__SUCCESS,
    createPost__FAILURE,
    getAllPosts__START,
    getAllPosts__SUCCESS,
    getAllPosts__FAILURE,
    deletePost__START,
    deletePost__SUCCESS,
    deletePost__FAILURE,
    getCurrentUserPosts__START,
    getCurrentUserPosts__SUCCESS,
    getCurrentUserPosts__FAILURE,
    changePostInf__START,
    changePostInf__SUCCESS,
    changePostInf__FAILURE,
    sendComment__START,
    sendComment__SUCCESS,
    sendComment__FAILURE,
    deleteComment__START,
    deleteComment__SUCCESS,
    deleteComment__FAILURE,
    changeComment__START,
    changeComment__SUCCESS,
    changeComment__FAILURE,
    localChangeComment__ALL,
    localAddComment__ALL,
    localDeleteComment__ALL,
    removeError
} = postsReducer.actions
