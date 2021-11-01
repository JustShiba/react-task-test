import { put, call } from 'redux-saga/effects'

import { addUsers, addUsersSuccess } from '../reducers/usersReducer'
import apiCall from '../../services'


export function* loadUsers() {
    const response = yield call(apiCall, ['get', 'users'])
    const { data } = response
    yield put(addUsers(data))
    yield put(addUsersSuccess())
}

