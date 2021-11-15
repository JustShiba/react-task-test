import { put, call, delay } from 'redux-saga/effects'

import { addUsers__SUCCESS, addUsers__FAILURE, removeError } from './usersReducer'
import { apiCall } from '../../services/service'


export function* loadUsers() {
    try {
        const response = yield call(apiCall, ['get', 'users'])
        if (response.status === 200) {
            yield put(addUsers__SUCCESS(response.data))
        }
    } catch (error) {
        yield put(addUsers__FAILURE(error.response.data.message))
        yield delay(5000)
        yield put(removeError())
    }
    
}

