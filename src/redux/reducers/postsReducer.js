import { createSlice } from '@reduxjs/toolkit'

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        postCreateInp: {
            title: '',
            body: ''
        },
        allPosts: [],
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
            alert('Hip, hip, horray!')
        },

        createPost__FAILURE: (state) => {
            state.loading = false
            alert('Error')
        },

        getAllPosts__START: (state, action) => {
            state.loading = true
        },

        getAllPosts__SUCCESS: (state, action) => {
            state.loading = false
            state.allPosts = action.payload
        },

        getAllPosts__FAILURE: (state, action) => {
            state.loading = false
            alert('Error')
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
} = postsReducer.actions
