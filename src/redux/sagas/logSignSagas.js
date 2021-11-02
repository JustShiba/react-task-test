import { select, put, call } from 'redux-saga/effects'

import { logSign__FAILURE, logSign__SUCCESS } from '../reducers/logSignReducer'
import apiCall from '../../services'


export function* logInSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try {
        const response = yield call(apiCall, ['post', 'login', state])
        if (response.status === 200) {
            yield put(logSign__SUCCESS(response.data))
            console.log(response)
            localStorage.setItem('userToken', response.data.token)
        }
    } catch {
        yield put(logSign__FAILURE())
    }
}

export function* signUpSaga() {
    const state = yield select(state => state.authorization.userInfInp)
    try{
        const response = yield call(apiCall, ['post', 'signup', state])
        if (response.status === 200) yield put(logSign__SUCCESS(response.data))
    }catch{
        yield put(logSign__FAILURE())
    }
}