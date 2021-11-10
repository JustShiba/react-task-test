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
        loading: false
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

        createPost__FAILURE: (state) => {
            state.postCreateInp.loading = false
            state.postCreateInp.title = ''
            state.postCreateInp.body = ''
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
            alert('fail')
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
            alert('fail')
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
    localDeleteComment__ALL
} = postsReducer.actions
