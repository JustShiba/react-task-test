import { select, put, call } from 'redux-saga/effects'

import { 
    checkLogIn__SUCCESS, 
    logIn__FAILURE, 
    logIn__SUCCESS, 
    signUp__FAILURE, 
    signUp__SUCCESS 
} from '../reducers/logSignReducer'
import { apiCall } from '../../services/service'


export function* logInSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, [`post`, `login`, state])
        if (response.status === 200) {
            yield put(logIn__SUCCESS(response.data))
            localStorage.setItem(`userToken`, response.data.token)
            localStorage.setItem(`userId`, response.data.userId)
        }
    } catch {
        yield put(logIn__FAILURE())
    }
}

export function* checkLogIn() {
    const userId = yield localStorage.getItem(`userId`)
    const userToken = yield localStorage.getItem(`userToken`)
    if (!userId || !userToken) return
    let response = {}
    try {
        response = yield call(apiCall, [`get`, `users/${userId}`, null, userToken])
        if (response.status === 200) {
            yield put(checkLogIn__SUCCESS(response.data))
        }
    } catch {
        localStorage.removeItem(`userToken`)
        localStorage.removeItem(`userId`)
    }
}

export function* signUpSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try{
        const response = yield call(apiCall, [`post`, `signup`, state])
        if (response.status === 200) yield put(signUp__SUCCESS())
    }catch{
        yield put(signUp__FAILURE())
    }
}