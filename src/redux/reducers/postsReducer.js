import { createSlice } from '@reduxjs/toolkit'

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        postCreateInp: {
            title: '',
            body: ''
        },
        loading: false
    },
    reducers: {
        changePostTitle: (state, action) => {
            state.postCreateInp.title = action.payload
        },

        changePostBody: (state, action) => {
            state.postCreateInp.body = action.payload
        },

        createPost__START: (state, action) => {
            state.loading = true
        },

        createPost__SUCCESS: (state, action) => {
            state.loading = false
            alert('Hip, hip, horray!')
        },

        createPost__FAILURE: (state, action) => {
            state.loading = false
            alert('Error')
        },

// apiCallPosts__START: (state, action) => {},
// apiCallPosts__SUCCESS: (state, action) => {},
// apiCallPosts__FAILURE: (state, action) => {},

    }
})

export const { 
    changePostTitle,
    changePostBody,
    createPost__START,
    createPost__SUCCESS,
    createPost__FAILURE,
} = postsReducer.actions
