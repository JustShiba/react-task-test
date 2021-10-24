import { takeEvery, all } from 'redux-saga/effects'
import { apiCallUsers } from '../reducers/usersReducer'
import { logIn__START, signUp__START } from '../reducers/logSignReducer'

import { loadUsers } from './usersSagas'
import { logInSaga, signUpSaga } from './logSignSagas'
// import { infAboutUser } from '../reducers/authUser'

export default function* allSagas() {
    yield all([
        yield takeEvery(apiCallUsers, loadUsers),
        yield takeEvery(logIn__START, logInSaga),
        yield takeEvery(signUp__START, signUpSaga),
        // yield takeEvery(infAboutUser, signUpSaga),
    ])
}