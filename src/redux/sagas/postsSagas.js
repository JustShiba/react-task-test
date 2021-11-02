import { call, put, select } from "@redux-saga/core/effects";
import apiCall from "../../services";
import { 
    createPost__SUCCESS, 
    createPost__FAILURE, 
    getAllPosts__SUCCESS,
    getAllPosts__FAILURE,
    deletePost__FAILURE,
    deletePost__SUCCESS,
    getAllPosts__START, 
} from "../reducers/postsReducer";


export function* getAllPosts() {
    try {
        const response = yield call(apiCall, ['get', 'posts'])
        if (response.status === 200) yield put(getAllPosts__SUCCESS(response.data))
        
    } catch {
        yield put(getAllPosts__FAILURE())
    }
}

export function* createPost() {
    const { postCreateInp } = yield select(state => state.posts)
    
    if (postCreateInp.title && postCreateInp.body) {
        try {
            const response = yield call(apiCall, ['post', 'posts', postCreateInp])

            if (response.status === 200) {
                yield put(createPost__SUCCESS())
                yield put(getAllPosts__START())
            }
        } catch {
            yield put(createPost__FAILURE())
            console.log('1');
        }
    } else {
        yield put(createPost__FAILURE())
        console.log('2');
    }
}

export function* deletePost() {
    const { selectedId } = yield select(state => state.posts)

    try {
        const response = yield call(apiCall, ['delete', `posts/${selectedId}`])

        if (response.status === 200) {
            yield put(deletePost__SUCCESS())
            getAllPosts()
        }
    } catch {
        yield put(deletePost__FAILURE())
    }
}
