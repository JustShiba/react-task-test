import { call, put, select } from "@redux-saga/core/effects";
import apiCall from "../../services";
import { 
    createPost__SUCCESS, 
    createPost__FAILURE, 
    getAllPosts__SUCCESS,
    getAllPosts__FAILURE, 
} from "../reducers/postsReducer";


export function* createPost() {
    const { postCreateInp } = yield select(state => state.posts)
    
    if (postCreateInp.title && postCreateInp.body) {
        try {
            const response = yield call(apiCall, ['post', 'posts', postCreateInp])

            if (response.status === 200) yield put(createPost__SUCCESS())
        } catch {
            yield put(createPost__FAILURE())
        }
    } else {
        yield put(createPost__FAILURE())
    }
}

export function* getAllPosts() {
    try {
        const response = yield call(apiCall, ['get', 'posts'])
        if (response.status === 200) yield put(getAllPosts__SUCCESS(response.data))
        
    } catch {
        yield put(getAllPosts__FAILURE())
    }
}