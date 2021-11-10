import { select, put, call } from 'redux-saga/effects'

import {
    getDataCurrentPersone__START,
    getDataCurrentPersone__SUCCESS,
    getDataCurrentPersone__FAILURE,
    setNick__SUCCESS,
    setPhone__SUCCESS,
    setNick__FAILURE,
    setPhone__FAILURE,
    changeNickInp,
    changePhoneInp,
    deleteUser__SUCCESS,
    deleteUser__FAILURE,
    clearPersInf,
} from '../reducers/logSignReducer'
import { getDataCurrentUser__SUCCESS, currentUserIsNotAuth } from '../reducers/usersReducer'
import { apiCall } from '../../services/service'


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
        } catch {
            yield put(getDataCurrentPersone__FAILURE())
        }
    } else {
        try {
            const response =  yield call(apiCall, [`get`, `users/${userCurrentId}`])
            
            if (response.status === 200) {
                yield put(getDataCurrentUser__SUCCESS(response.data))
            }
        } catch {
            yield put(getDataCurrentPersone__FAILURE())
        }
    }
}

export function* changeNick() {
    const id = yield select(state => state.authorization.personalInf.userId)
    const nick = yield select(state => state.authorization.userInfInp.nickName)
    
    try {
        const response =  yield call(apiCall, [`patch`, `users/${id}`, {'nickname': nick}])
        
        if (response.status === 200) {
            yield put(setNick__SUCCESS())
            yield put(getDataCurrentPersone__START())
            yield put(changeNickInp(''))
        }
    } catch {
        yield put(setNick__FAILURE())
    }
}


export function* changePhone() {
    const id = yield select(state => state.authorization.personalInf.userId)
    const phone = yield select(state => state.authorization.userInfInp.phone)

    try {
        const response =  yield call(apiCall, [`patch`, `users/${id}`, {'phone': phone}])
        
        if (response.status === 200) {
            yield put(setPhone__SUCCESS())
            yield put(getDataCurrentPersone__START())
            yield put(changePhoneInp(''))
        }
    } catch {
        yield put(setPhone__FAILURE())
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
    } catch {
        yield put(deleteUser__FAILURE())
    }
} 
