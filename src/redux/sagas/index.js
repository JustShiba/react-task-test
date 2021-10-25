import { takeEvery, all } from 'redux-saga/effects'

import { apiCallUsers } from '../reducers/usersReducer'
import { 
    deleteUser__START,
    logIn__START, 
    setNick__START, 
    setPhone__START, 
    signUp__START 
} from '../reducers/logSignReducer'
import { loadUsers } from './usersSagas'
import { logInSaga, signUpSaga } from './logSignSagas'
import { changeNick, currentUser, changePhone, deleteUser } from './currentUserSagas'
import { getDataCurrentUser__START } from '../reducers/logSignReducer'


export default function* allSagas() {
    yield all([
        yield takeEvery(apiCallUsers, loadUsers),
        yield takeEvery(logIn__START, logInSaga),
        yield takeEvery(signUp__START, signUpSaga),
        yield takeEvery(getDataCurrentUser__START, currentUser),
        yield takeEvery(setNick__START, changeNick),
        yield takeEvery(setPhone__START, changePhone),
        yield takeEvery(deleteUser__START, deleteUser),
    ])
}