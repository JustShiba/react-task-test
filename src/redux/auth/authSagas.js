import { select, put, call, delay } from 'redux-saga/effects'

import { 
    checkLogInSuccess, 
    logInFailure, 
    logInSuccess, 
    signUpFailure, 
    signUpSuccess,
    checkLogInFailure,
    removeError
} from './authReducer'
import { apiCall } from '../../services/service'



export function* logInSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, [`post`, `login`, state])
        if (response.status === 200) {
            yield put(logInSuccess(response.data))
            localStorage.setItem(`userToken`, response.data.token)
            localStorage.setItem(`userId`, response.data.userId)
        }
    } catch (error) {
        yield put(logInFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}

export function* checkLogIn() {
    const userId = yield localStorage.getItem(`userId`)
    const userToken = yield localStorage.getItem(`userToken`)
    if (!userId || !userToken) put(checkLogInFailure())
    let response = {}
    try {
        response = yield call(apiCall, [`get`, `users/${userId}`, null, userToken])
        if (response.status === 200) {
            yield put(checkLogInSuccess(response.data))
        }
    } catch {
        localStorage.removeItem(`userToken`)
        localStorage.removeItem(`userId`)
        put(checkLogInFailure())
    }
}

export function* signUpSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, [`post`, `signup`, state])
        if (response.status === 200) yield put(signUpSuccess())
    } catch (error) {
        yield put(signUpFailure(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
}