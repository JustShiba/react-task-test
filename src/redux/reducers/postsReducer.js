import { createSlice } from '@reduxjs/toolkit'

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        postCreateInp: {
            title: '',
            body: ''
        },
        allPosts: [],
        selectedId: '',
        postChangeInf: {},
        commentSendInf: {},
        commentDeletInf: {},
        commentChangeInf: {},
        loading: false
    },
    reducers: {
        changePostTitle: (state, action) => {
            state.postCreateInp.title = action.payload
        },

        changePostBody: (state, action) => {
            state.postCreateInp.body = action.payload
        },

        createPost__START: (state) => {
            state.loading = true
        },

        createPost__SUCCESS: (state) => {
            state.loading = false
            state.postCreateInp.title = ''
            state.postCreateInp.body = ''
        },

        createPost__FAILURE: (state) => {
            state.loading = false
            alert('Error')
        },

        getAllPosts__START: (state) => {
            state.loading = true
        },

        getAllPosts__SUCCESS: (state, action) => {
            state.loading = false
            state.allPosts = action.payload
        },

        getCurrentUserPosts__START: (state) => {
            state.loading = true
        },
        
        getCurrentUserPosts__SUCCESS: (state) => {
            state.loading = false
        },
        
        getCurrentUserPosts__FAILURE: (state) => {
            state.loading = false
            alert('Error')
        },

        deletePost__START: (state, action) => {
            state.loading = true
            state.selectedId = action.payload
        },

        deletePost__SUCCESS: (state) => {
            state.loading = false
            state.selectedId = ''
        },

        deletePost__FAILURE: (state) => {
            state.loading = false
            state.selectedId = ''
            alert('FAILURE')
        },

        changePostInf__START: (state, action) => {
            state.loading = true
            state.postChangeInf = action.payload
        },

        changePostInf__SUCCESS: (state) => {
            state.loading = false
            state.postChangeInf = {}
        },

        changePostInf__FAILURE: (state) => {
            state.loading = false
            state.postChangeInf = {}
            alert('Failed to change post information')
        },

        sendComment__START: (state, action) => {
            state.loading = true
            state.commentSendInf = action.payload
        },

        sendComment__SUCCESS: (state) => {
            state.loading = false
            state.commentSendInf = ''
        },

        sendComment__FAILURE: (state) => {
            state.loading = false
            state.commentSendInf = ''
        },

        deleteComment__START: (state, action) => {
            state.loading = true
            state.commentDeletInf = action.payload
        },

        deleteComment__SUCCESS: (state) => {
            state.loading = false
            state.commentDeletInf = {}
        },

        deleteComment__FAILURE: (state) => {
            state.loading = false
            state.commentDeletInf = {}
        },

        changeComment__START: (state, action) => {
            state.loading = true
            state.commentChangeInf = action.payload
        },
        
        changeComment__SUCCESS: (state) => {
            state.loading = false
            state.commentChangeInf = {}
        },

        changeComment__FAILURE: (state) => {
            state.loading = false
            state.commentChangeInf = {}
        },

    }
})

export const { 
    changePostTitle,
    changePostBody,
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
} = postsReducer.actions
