import { select, put, call } from 'redux-saga/effects'

import {
    getDataCurrentPersone__START,
    getDataCurrentPersone__SUCCESS,
    getDataCurrentPersone__FAILURE,
    setNickPhone__SUCCESS,
    setNickPhone__FAILURE,
    deleteUser__SUCCESS,
    deleteUser__FAILURE,
    clearPersInf,
} from '../auth/authReducer'
import { getDataCurrentUser__SUCCESS, currentUserIsNotAuth, removeError } from './usersReducer'
import { apiCall } from '../../services/service'
import { waitErrRemove } from '../removeError/removeError'


export function* currentUser() {
    const userPersonalId = yield select(state => state.authorization.personalInf.userId)
    const userCurrentId = yield select(state => state.users.currentUserId)

    if (userPersonalId === userCurrentId) {
        try {
            const response =  yield call(apiCall, [`get`, `users/${userPersonalId}`])
            if (response.status === 200) {
                yield put(currentUserIsNotAuth())
                yield put(getDataCurrentPersone__SUCCESS(response.data))
            }
        } catch (error) {
            yield put(getDataCurrentPersone__FAILURE(error.response.data.message))
            yield call(waitErrRemove, 5000)
            yield put(removeError())
        }
    } else {
        try {
            const response =  yield call(apiCall, [`get`, `users/${userCurrentId}`])
            
            if (response.status === 200) {
                yield put(getDataCurrentUser__SUCCESS(response.data))
            }
        } catch (error) {
            yield put(getDataCurrentPersone__FAILURE(error.response.data.message))
            yield call(waitErrRemove, 5000)
            yield put(removeError())
        }
    }
}

export function* changeNickPhone() {
    const id = yield select(state => state.authorization.personalInf.userId)
    const nick = yield select(state => state.authorization.userInfInp.nickName)
    const phone = yield select(state => state.authorization.userInfInp.phone)
    
    try {
        const response =  yield call(apiCall, [`patch`, `users/${id}`, {'nickname': nick, 'phone': phone}])
        
        if (response.status === 200) {
            yield put(setNickPhone__SUCCESS())
            yield put(getDataCurrentPersone__START())
        }
    } catch (error) {
        yield put(setNickPhone__FAILURE(error.response.data.message))
        yield call(waitErrRemove, 5000)
        yield put(removeError())
    }
}

export function* deleteUser() {
    const id = yield select(state => state.authorization.personalInf.userId)
    try {
        const response =  yield call(apiCall, [`delete`, `users/${id}`])
        
        if (response.status === 200) {
            yield put(deleteUser__SUCCESS())
            yield put(clearPersInf())
        }
    } catch (error) {
        yield put(deleteUser__FAILURE(error.response.data.message))
        yield call(waitErrRemove, 5000)
        yield put(removeError())
    }
} 
