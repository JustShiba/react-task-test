import { takeEvery, all } from 'redux-saga/effects'
import { apiCallUsers } from '../reducers/usersReducer'
import { logIn__START } from '../reducers/logSignReducer'

import { loadUsers } from './usersSagas'
import { logInSaga } from './logSignSagas'

export default function* allSagas() {
    yield all([
        yield takeEvery(apiCallUsers, loadUsers),
        yield takeEvery(logIn__START, logInSaga)
    ])
}