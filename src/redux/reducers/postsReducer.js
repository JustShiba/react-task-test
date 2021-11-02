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
            alert('Hip, hip, horray!')
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

        getAllPosts__FAILURE: (state) => {
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
            alert('SUCCESS')
        },

        deletePost__FAILURE: (state) => {
            state.loading = false
            state.selectedId = ''
            alert('FAILURE')
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
} = postsReducer.actions
