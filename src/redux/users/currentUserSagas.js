import { select, put, call, delay } from 'redux-saga/effects';

import {
    getDataCurrentPersonStart,
    getDataCurrentPersonSuccess,
    getDataCurrentPersonFailure,
    setNickPhoneSuccess,
    setNickPhoneFailure,
    deleteUserSuccess,
    deleteUserFailure,
    clearPersInf,
    removeError,
} from '../auth/authReducer';
import { getDataCurrentUserSuccess, currentUserIsNotAuth } from './usersReducer';
import { apiCall } from '../../services/service';

export function* currentUser() {
    const userPersonalId = yield select((state) => state.authorization.personalInformationUser.userId);
    const userCurrentId = yield select((state) => state.users.currentUserId);

    if (userPersonalId === userCurrentId) {
        try {
            const response = yield call(apiCall, [`get`, `users/${userPersonalId}`]);
            if (response.status === 200) {
                yield put(currentUserIsNotAuth());
                yield put(getDataCurrentPersonSuccess(response.data));
            }
        } catch (error) {
            yield put(getDataCurrentPersonFailure(error.response.data.message));
            yield delay(5000);
            yield put(removeError());
        }
    } else {
        try {
            const response = yield call(apiCall, [`get`, `users/${userCurrentId}`]);

            if (response.status === 200) {
                yield put(getDataCurrentUserSuccess(response.data));
            }
        } catch (error) {
            yield put(getDataCurrentPersonFailure(error.response.data.message));
            yield delay(5000);
            yield put(removeError());
        }
    }
}

export function* changeNickPhone() {
    const id = yield select((state) => state.authorization.personalInformationUser.userId);
    const nick = yield select((state) => state.authorization.userInformationInput.nickName);
    const phone = yield select((state) => state.authorization.userInformationInput.phone);

    try {
        const response = yield call(apiCall, [`patch`, `users/${id}`, { nickname: nick, phone: phone }]);

        if (response.status === 200) {
            yield put(setNickPhoneSuccess());
            yield put(getDataCurrentPersonStart());
        }
    } catch (error) {
        yield put(setNickPhoneFailure(error.response.data.message));
        yield delay(5000);
        yield put(removeError());
    }
}

export function* deleteUser() {
    const id = yield select((state) => state.authorization.personalInformationUser.userId);
    try {
        const response = yield call(apiCall, [`delete`, `users/${id}`]);

        if (response.status === 200) {
            yield put(deleteUserSuccess());
            yield put(clearPersInf());
        }
    } catch (error) {
        yield put(deleteUserFailure(error.response.data.message));
        yield delay(5000);
        yield put(removeError());
    }
}
