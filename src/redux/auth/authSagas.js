import { select, put, call, delay } from 'redux-saga/effects';

import {
    checkLogInSuccess,
    logInFailure,
    logInSuccess,
    signUpFailure,
    signUpSuccess,
    removeError,
} from './authReducer';
import { apiCall } from '../../services/service';
import { USER__ID, USER__TOKEN } from '../variables/variables';

export function* logInSaga() {
    const state = yield select((state) => state.authorization.userInformationInput);
    try {
        const response = yield call(apiCall, [`post`, `login`, state]);
        if (response.status === 200) {
            yield put(logInSuccess(response.data));
            localStorage.setItem(USER__TOKEN, response.data.token);
            localStorage.setItem(USER__ID, response.data.userId);
        }
    } catch (error) {
        yield put(logInFailure(error.response.data.message));
        yield delay(5000);
        yield put(removeError());
    }
}

const cleanLocalStorage = () => {
    localStorage.removeItem(USER__TOKEN);
    localStorage.removeItem(USER__ID);
};

export function* checkLogIn() {
    const userToken = yield localStorage.getItem(USER__TOKEN);
    const userId = yield localStorage.getItem(USER__ID);
    if (!userId || !userToken) return cleanLocalStorage();
    let response = {};
    try {
        response = yield call(apiCall, [`get`, `users/${userId}`, null, userToken]);
        if (response.status === 200) {
            yield put(checkLogInSuccess(response.data));
        }
    } catch {
        cleanLocalStorage();
    }
}

export function* signUpSaga() {
    const state = yield select((state) => state.authorization.userInformationInput);
    try {
        const response = yield call(apiCall, [`post`, `signup`, state]);
        if (response.status === 200) yield put(signUpSuccess());
    } catch (error) {
        yield put(signUpFailure(error.response.data.message));
        yield delay(5000);
        yield put(removeError());
    }
}
