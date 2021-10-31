import axios from 'axios'
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
    clearPersInf
} from '../reducers/logSignReducer'
import { getDataCurrentUser__SUCCESS, currentUserIsNotAuth } from '../reducers/usersReducer'
import { config } from './auth/auth'


const getInfUser = ([userId, method, inf]) => {
    if (inf) {
        return axios[method](`http://178.124.178.6:3000/users/${userId}`, inf, config)
                    .then(resp => resp)
                    .catch(error => console.log(error))
    }
    return axios[method](`http://178.124.178.6:3000/users/${userId}`, config)
                .then(resp => resp)
                .catch(error => console.log(error))
}
 
export function* currentUser() {
    const userPersonalId = yield select(state => state.authorization.personalInf.userId)
    const userCurrentId = yield select(state => state.users.currentUserId)

    if (!userCurrentId || userPersonalId === userCurrentId) {
        try {
            const response =  yield call(getInfUser, [userPersonalId, 'get'])
            
            if (response.status === 200) {
                yield put(getDataCurrentPersone__SUCCESS(response.data))
                yield put(currentUserIsNotAuth())
            }
        } catch {
            yield put(getDataCurrentPersone__FAILURE())
        }
    } else {
        try {
            const response =  yield call(getInfUser, [userCurrentId, 'get'])
            
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
        const response =  yield call(getInfUser, [id, 'patch', {"nickname": nick}])
        
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
        const response =  yield call(getInfUser, [id, 'patch', {"phone": phone}])
        
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
        const response =  yield call(getInfUser, [id, 'delete'])
        
        if (response.status === 200) {
            yield put(deleteUser__SUCCESS())
            yield put(clearPersInf())
        }
    } catch {
        yield put(deleteUser__FAILURE())
    }
} 