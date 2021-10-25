import axios from 'axios'
import { select, put, call } from 'redux-saga/effects'

import { logSign__FAILURE, logSign__SUCCESS } from '../reducers/logSignReducer'
import { config, admin } from './auth/auth'


const sendDataUser = ([user, type]) => {
    return axios.post(`http://178.124.178.6:3000/${type}`, user, config)
                .then(resp => resp)
                .catch(error => console.log(error))
}

export function* logInSaga() {
    const state = yield select(state => state.authorization.userInfInp);
    try {
        const response = yield call(sendDataUser, [state, 'login'])
        if (response.status === 200) {
            yield put(logSign__SUCCESS(response.data));
            console.log(response);
            localStorage.setItem('userToken', response.data.token);
        }
    } catch {
        yield put(logSign__FAILURE())
    }
}

export function* signUpSaga() {
    const state = yield select(state => state.authorization.userInfInp);
    try{
        const response = yield call(sendDataUser, [state, 'signup']);
        if (response.status === 200) {
            yield put(logSign__SUCCESS(response.data))
        }
    }catch{
        yield put(logSign__FAILURE())
    }
}