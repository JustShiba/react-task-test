import { call, put, select, delay } from '@redux-saga/core/effects'

import { apiCall } from '../../services/service'
import { 
    getDataCurrentPersonStart,
    updateUserPosts 
} from '../auth/authReducer'
import { 
    createPostSuccess, 
    createPostFailure, 
    getAllPostsSuccess,
    getAllPostsFailure,
    deletePostFailure,
    deletePostSuccess,
    getCurrentUserPostsStart,
    getCurrentUserPostsSuccess,
    getCurrentUserPostsFailure,
    changePostInfSuccess,
    changePostInfFailure,
    sendCommentSuccess,
    sendCommentFailure,
    changeCommentSuccess,
    changeCommentFailure,
    deleteCommentSuccess,
    deleteCommentFailure,
    removeError,
    getAllPostsStart, 
} from './postsReducer'
import { 
    getDataCurrentUserStart,
} from '../users/usersReducer'


export function* changePostInf() {
    const { titlePost, bodyPost, postId } = yield select(state => state.posts.postChangeInf)
    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}`, {'title': titlePost, 'body': bodyPost}])
        if (response.status === 200) {
            yield put(changePostInfSuccess())
            yield put(getCurrentUserPostsStart())
        }
    } catch (error) {
        yield put(changePostInfFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}

const addNames = (users, postUserId) => {
    const length = users.length
    for (let i = 0; i < length; i++){
        if(users[i].userId === postUserId){
            return users[i].nickname
        }
    }
}

export function* getAllPosts() {
    try {
        const response = yield call(apiCall, [`get`, `posts`])
        
        if (response.status === 200) {
            const { users } = yield select(state => state.users)
            for (let i = 0; i < response.data.length; i++) {
                response.data[i].nickname = addNames(users, response.data[i].userId)
            }
            yield put(getAllPostsSuccess(response.data))
        } 
    } catch (error) {
        yield put(getAllPostsFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}

export function* createPost() {
    const { title, body } = yield select(state => state.posts.postCreateInp)
    
    if (title && body) {
        try {
            const response = yield call(apiCall, [`post`, `posts`, { title, body }])

            if (response.status === 200) {
                yield put(createPostSuccess())
                yield put(getCurrentUserPostsStart())
            }
        } catch (error) {
            yield put(createPostFailure(error.response.data.message))
            yield delay(5000)
            yield put(removeError())
        }
    } else {
        yield put(createPostFailure('No title or body'))
        yield delay(5000)
        yield put(removeError())
    }
}

export function* getCurrentUserPosts() {
    try {
        const response = yield call(apiCall, [`get`, `posts/current`])
        if (response.status === 200) {
            yield put(getCurrentUserPostsSuccess())
            yield put(updateUserPosts(response.data))
        }
    } catch (error) {
        yield put(getCurrentUserPostsFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}

export function* deletePost() {
    const { selectedId } = yield select(state => state.posts)

    try {
        const response = yield call(apiCall, [`delete`, `posts/${selectedId}`])

        if (response.status === 200) {
            yield put(deletePostSuccess())
            yield put(getCurrentUserPostsStart())
        }
    } catch (error) {
        yield put(deletePostFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}

export function* sendComment() {
    const { comment, postId, config } = yield select(state => state.posts.commentSendInf)

    try {
        const response = yield call(apiCall, [`post`, `posts/${postId}/comments`, {'body': comment}])

        if (response.status === 200) {
            if (config === 'authUser') {
                yield put(getDataCurrentPersonStart())
            }
            
            if (config === 'nonAuthUser') {
                yield put(getDataCurrentUserStart())
            }
            
            if (!config) {
                yield put(getAllPostsStart())
            }
            yield put(sendCommentSuccess())
        }
    } catch (error) {
        yield put(sendCommentFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}

export function* deleteComment() {
    const { postId, commentId, config } = yield select(state => state.posts.commentDeletInf)

    try {
        const response = yield call(apiCall, [`delete`, `posts/${postId}/comments/${commentId}`])
        
        if (response.status === 200) {
            yield put(deleteCommentSuccess())
            if (config === 'authUser') {
                yield put(getDataCurrentPersonStart())
            }
            
            if (config === 'nonAuthUser') {
                yield put(getDataCurrentUserStart())
            }
            
            if (!config) {
                yield put(getAllPostsStart())
            }
        }
    } catch (error) {
        yield put(deleteCommentFailure(error.response.data.message))
    }
}

export function* changeComment() {
    const { postId, commentId, comment, config } = yield select(state => state.posts.commentChangeInf)

    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}/comments/${commentId}`, { 'body': comment}])
        
        if (response.status === 200) {
            yield put(changeCommentSuccess())
            if (config === 'authUser') {
                yield put(getDataCurrentPersonStart())
            }
            
            if (config === 'nonAuthUser') {
                yield put(getDataCurrentUserStart())
            }
            
            if (!config) {
                yield put(getAllPostsStart())
            }
        }
    } catch (error) {
        yield put(changeCommentFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}