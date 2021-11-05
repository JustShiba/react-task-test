import { call, put, select } from '@redux-saga/core/effects'

import apiCall from '../../services'
import { updateUserPosts } from '../reducers/logSignReducer'
import { 
    createPost__SUCCESS, 
    createPost__FAILURE, 
    getAllPosts__SUCCESS,
    getAllPosts__FAILURE,
    deletePost__FAILURE,
    deletePost__SUCCESS,
    getCurrentUserPosts__START,
    getCurrentUserPosts__SUCCESS,
    getCurrentUserPosts__FAILURE,
    changePostInf__SUCCESS,
    changePostInf__FAILURE,
    sendComment__SUCCESS,
    sendComment__FAILURE, 
} from '../reducers/postsReducer'


export function* changePostInf() {
    const { titlePost, bodyPost, postId } = yield select(state => state.posts.postChangeInf)
    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}`, {"title": titlePost, "body": bodyPost}])
        if (response.status === 200) {
            yield put(changePostInf__SUCCESS())
            yield put(getCurrentUserPosts__START())
        }
    } catch {
        console.log('err');
        yield put(changePostInf__FAILURE())
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
            yield put(getAllPosts__SUCCESS(response.data))
        } 
    } catch {
        yield put(getAllPosts__FAILURE())
    }
}

export function* createPost() {
    const { postCreateInp } = yield select(state => state.posts)
    
    if (postCreateInp.title && postCreateInp.body) {
        try {
            const response = yield call(apiCall, [`post`, `posts`, postCreateInp])

            if (response.status === 200) {
                yield put(createPost__SUCCESS())
                yield put(getCurrentUserPosts__START())
            }
        } catch {
            yield put(createPost__FAILURE())
        }
    } else {
        yield put(createPost__FAILURE())
    }
}

export function* getCurrentUserPosts() {
    try {
        const response = yield call(apiCall, [`get`, `posts/current`])
        if (response.status === 200) {
            yield put(getCurrentUserPosts__SUCCESS())
            yield put(updateUserPosts(response.data))
        }
    } catch {
        yield put(getCurrentUserPosts__FAILURE())
    }
}

export function* deletePost() {
    const { selectedId } = yield select(state => state.posts)

    try {
        const response = yield call(apiCall, [`delete`, `posts/${selectedId}`])

        if (response.status === 200) {
            yield put(deletePost__SUCCESS())
            yield put(getCurrentUserPosts__START())
        }
    } catch {
        yield put(deletePost__FAILURE())
    }
}

export function* sendComment() {
    const { comment, postId } = yield select(state => state.posts.commentSendInf)

    try {
        const response = yield call(apiCall, [`post`, `posts/${postId}/comments`, {"body": comment}])

        if (response.status === 200) {
            yield put(sendComment__SUCCESS())
        }
    } catch {
        yield put(sendComment__FAILURE())
    }
}