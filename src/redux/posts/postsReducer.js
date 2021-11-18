import { createSlice } from '@reduxjs/toolkit';

export const postsReducer = createSlice({
    name: 'postsReducer',
    initialState: {
        postCreateInput: {
            title: '',
            body: '',
            loading: false,
        },
        allPosts: [],
        selectedIdPost: '',
        postChangeInformation: {},
        commentSendInformation: {},
        commentDeletInformation: {},
        commentChangeInformation: {},
        loading: false,
        errorInformation: {
            error: false,
            errorText: '',
        },
    },
    reducers: {
        createPostStart: (state, action) => {
            state.postCreateInput.loading = true;
            state.postCreateInput.title = action.payload.title;
            state.postCreateInput.body = action.payload.body;
        },

        createPostSuccess: (state) => {
            state.postCreateInput.loading = false;
            state.postCreateInput.title = '';
            state.postCreateInput.body = '';
        },

        createPostFailure: (state, action) => {
            state.postCreateInput.loading = false;
            state.postCreateInput.title = '';
            state.postCreateInput.body = '';
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        getAllPostsStart: (state) => {
            state.loading = true;
        },

        getAllPostsSuccess: (state, action) => {
            state.loading = false;
            state.allPosts = action.payload;
        },

        getAllPosts__FAILRE: (state, action) => {
            state.loading = false;
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        getCurrentUserPostsStart: (state) => {
            state.loading = true;
        },

        getCurrentUserPostsSuccess: (state) => {
            state.loading = false;
        },

        getCurrentUserPostsFailure: (state, action) => {
            state.loading = false;
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        deletePostStart: (state, action) => {
            state.loading = true;
            state.selectedIdPost = action.payload;
        },

        deletePostSuccess: (state) => {
            state.loading = false;
            state.selectedIdPost = '';
        },

        deletePostFailure: (state, action) => {
            state.loading = false;
            state.selectedIdPost = '';
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        changePostInfStart: (state, action) => {
            state.loading = true;
            state.postChangeInformation = action.payload;
        },

        changePostInfSuccess: (state) => {
            state.loading = false;
            state.postChangeInformation = {};
        },

        changePostInfFailure: (state, action) => {
            state.loading = false;
            state.postChangeInformation = {};
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        sendCommentStart: (state, action) => {
            state.loading = true;
            state.commentSendInformation = action.payload;
        },

        sendCommentSuccess: (state) => {
            state.loading = false;
            state.commentSendInformation = '';
        },

        sendCommentFailure: (state, action) => {
            state.loading = false;
            state.commentSendInformation = '';
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        deleteCommentStart: (state, action) => {
            state.loading = true;
            state.commentDeletInformation = action.payload;
        },

        deleteCommentSuccess: (state) => {
            state.loading = false;
            state.commentDeletInformation = {};
        },

        deleteCommentFailure: (state, action) => {
            state.loading = false;
            state.commentDeletInformation = {};
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        changeCommentStart: (state, action) => {
            state.loading = true;
            state.commentChangeInformation = action.payload;
        },

        changeCommentSuccess: (state) => {
            state.loading = false;
            state.commentChangeInformation = {};
        },

        changeCommentFailure: (state, action) => {
            state.loading = false;
            state.commentChangeInformation = {};
            state.errorInformation.error = true;
            state.errorInformation.errorText = action.payload;
        },

        removeError: (state) => {
            state.errorInformation = {
                error: false,
                errorText: '',
            };
        },
    },
});

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
    removeError,
} = postsReducer.actions;
