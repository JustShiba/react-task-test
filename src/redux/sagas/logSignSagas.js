import { select, put, call } from 'redux-saga/effects'

import { logIn__FAILURE, logIn__SUCCESS, signUp__FAILURE, signUp__SUCCESS } from '../reducers/logSignReducer'
import apiCall from '../../services'


export function* logInSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, ['post', 'login', state])
        if (response.status === 200) {
            yield put(logIn__SUCCESS(response.data))
            console.log(response)
            localStorage.setItem('userToken', response.data.token)
        }
    } catch {
        yield put(logIn__FAILURE())
    }
}

export function* signUpSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try{
        const response = yield call(apiCall, ['post', 'signup', state])
        if (response.status === 200) yield put(signUp__SUCCESS())
    }catch{
        yield put(signUp__FAILURE())
    }
}