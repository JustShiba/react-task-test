import { select, put, call } from 'redux-saga/effects'

import { 
    checkLogIn__SUCCESS, 
    logIn__FAILURE, 
    logIn__SUCCESS, 
    signUp__FAILURE, 
    signUp__SUCCESS,
    checkLogIn__FAILURE,
    removeError
} from './authReducer'
import { apiCall } from '../../services/service'
import { waitErrRemove } from '../removeError/removeError'



export function* logInSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, [`post`, `login`, state])
        if (response.status === 200) {
            yield put(logIn__SUCCESS(response.data))
            localStorage.setItem(`userToken`, response.data.token)
            localStorage.setItem(`userId`, response.data.userId)
        }
    } catch (error) {
        yield put(logIn__FAILURE(error.response.data.message))
        yield call(waitErrRemove, 5000)
        yield put(removeError())
    }
}

export function* checkLogIn() {
    const userId = yield localStorage.getItem(`userId`)
    const userToken = yield localStorage.getItem(`userToken`)
    if (!userId || !userToken) put(checkLogIn__FAILURE())
    let response = {}
    try {
        response = yield call(apiCall, [`get`, `users/${userId}`, null, userToken])
        if (response.status === 200) {
            yield put(checkLogIn__SUCCESS(response.data))
        }
    } catch {
        localStorage.removeItem(`userToken`)
        localStorage.removeItem(`userId`)
        put(checkLogIn__FAILURE())
    }
}

export function* signUpSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, [`post`, `signup`, state])
        if (response.status === 200) yield put(signUp__SUCCESS())
    } catch (error) {
        yield put(signUp__FAILURE(error.response.data.message))
        yield call(waitErrRemove, 5000)
        yield put(removeError())
    }
}