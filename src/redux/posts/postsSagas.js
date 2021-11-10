import { call, put, select } from '@redux-saga/core/effects'

import { apiCall } from '../../services/service'
import { 
    localAddComment__AUTH, 
    localChangeComment__AUTH, 
    localDeleteComment__AUTH, 
    updateUserPosts 
} from '../auth/authReducer'
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
    changeComment__SUCCESS,
    changeComment__FAILURE,
    deleteComment__SUCCESS,
    deleteComment__FAILURE,
    localChangeComment__ALL,
    localAddComment__ALL,
    localDeleteComment__ALL, 
} from './postsReducer'
import { 
    localAddComment__NONAUTH, 
    localChangeComment__NONAUTH, 
    localDeleteComment__NONAUTH 
} from '../users/usersReducer'


export function* changePostInf() {
    const { titlePost, bodyPost, postId } = yield select(state => state.posts.postChangeInf)
    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}`, {'title': titlePost, 'body': bodyPost}])
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
    const { title, body } = yield select(state => state.posts.postCreateInp)
    
    if (title && body) {
        try {
            const response = yield call(apiCall, [`post`, `posts`, { title, body }])

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
    const { comment, postId, config } = yield select(state => state.posts.commentSendInf)
    const state = yield select(state => state)

    try {
        const response = yield call(apiCall, [`post`, `posts/${postId}/comments`, {'body': comment}])

        if (response.status === 200) {
            if (config === 'authUser') {
                const { posts } = state.authorization.personalInf
                const postIndex = posts.findIndex(item => item.postId === postId)
                yield put(localAddComment__AUTH({postIndex, comment: response.data}))
            }
            
            if (config === 'nonAuthUser') {
                const { posts } = state.users.currentUserInf
                const postIndex = posts.findIndex(item => item.postId === postId)
                yield put(localAddComment__NONAUTH({postIndex, comment: response.data}))
            }
            
            if (!config) {
                const { allPosts } = state.posts
                const postIndex = allPosts.findIndex(item => item.postId === postId)
                yield put(localAddComment__ALL({postIndex, comment: response.data}))
            }
            yield put(sendComment__SUCCESS())
        }
    } catch {
        yield put(sendComment__FAILURE())
    }
}

export function* deleteComment() {
    const { postId, commentId, config } = yield select(state => state.posts.commentDeletInf)
    const state = yield select(state => state)

    try {
        const response = yield call(apiCall, [`delete`, `posts/${postId}/comments/${commentId}`])
        
        if (response.status === 200) {
            yield put(deleteComment__SUCCESS())
            if (config === 'authUser') {
                const { posts } = state.authorization.personalInf
                const postIndex = posts.findIndex(item => item.postId === postId)
                const commentIndex = posts[postIndex].comments.findIndex(item => item.commentId === commentId)
                yield put(localDeleteComment__AUTH({postIndex, commentIndex}))
            }
            
            if (config === 'nonAuthUser') {
                const { posts } = state.users.currentUserInf
                const postIndex = posts.findIndex(item => item.postId === postId)
                const commentIndex = posts[postIndex].comments.findIndex(item => item.commentId === commentId)
                yield put(localDeleteComment__NONAUTH({postIndex, commentIndex}))
            }
            
            if (!config) {
                const { allPosts } = state.posts
                const postIndex = allPosts.findIndex(item => item.postId === postId)
                const commentIndex = allPosts[postIndex].comments.findIndex(item => item.commentId === commentId)
                yield put(localDeleteComment__ALL({postIndex, commentIndex}))
            }
        }
    } catch {
        yield put(deleteComment__FAILURE())
        console.log('fail to delete');
    }
}

export function* changeComment() {
    const { postId, commentId, comment, config } = yield select(state => state.posts.commentChangeInf)
    const state = yield select(state => state)

    try {
        const response = yield call(apiCall, [`put`, `posts/${postId}/comments/${commentId}`, { 'body': comment}])
        
        if (response.status === 200) {
            yield put(changeComment__SUCCESS())
            if (config === 'authUser') {
                const { posts } = state.authorization.personalInf
                const postIndex = posts.findIndex(item => item.postId === postId)
                const commentIndex = posts[postIndex].comments.findIndex(item => item.commentId === commentId)
                yield put(localChangeComment__AUTH({postIndex, commentIndex, comment: response.data}))
            }
            
            if (config === 'nonAuthUser') {
                const { posts } = state.users.currentUserInf
                const postIndex = posts.findIndex(item => item.postId === postId)
                const commentIndex = posts[postIndex].comments.findIndex(item => item.commentId === commentId)
                yield put(localChangeComment__NONAUTH({postIndex, commentIndex, comment: response.data}))
            }
            
            if (!config) {
                const { allPosts } = state.posts
                const postIndex = allPosts.findIndex(item => item.postId === postId)
                const commentIndex = allPosts[postIndex].comments.findIndex(item => item.commentId === commentId)
                yield put(localChangeComment__ALL({postIndex, commentIndex, comment: response.data}))
            }
        }
    } catch {
        yield put(changeComment__FAILURE())
        console.log('fail to change');
    }
}