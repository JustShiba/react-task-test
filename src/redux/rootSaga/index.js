import { takeEvery, all } from 'redux-saga/effects'

import { apiCallUsers, getDataCurrentUser__START } from '../users/usersReducer'
import { loadUsers } from '../users/usersSagas'
import { checkLogIn, logInSaga, signUpSaga } from '../auth/authSagas'
import { checkLogIn__START, getDataCurrentPersone__START } from '../auth/authReducer'
import { 
    deleteUser__START,
    logIn__START, 
    setNickPhone__START, 
    signUp__START 
} from '../auth/authReducer'
import { 
    changeNickPhone, 
    currentUser, 
    deleteUser,
} from '../users/currentUserSagas'
import { 
    changeComment__START,
    changePostInf__START,
    createPost__START, 
    deleteComment__START, 
    deletePost__START, 
    getAllPosts__START, 
    getCurrentUserPosts__START, 
    sendComment__START
} from '../posts/postsReducer'
import { 
    changeComment,
    changePostInf, 
    createPost, 
    deleteComment, 
    deletePost, 
    getAllPosts, 
    getCurrentUserPosts, 
    sendComment
} from '../posts/postsSagas'


export default function* allSagas() {
    yield all([
        yield takeEvery(checkLogIn__START, checkLogIn),
        yield takeEvery(apiCallUsers, loadUsers),
        yield takeEvery(signUp__START, signUpSaga),
        yield takeEvery(logIn__START, logInSaga),
        yield takeEvery(getDataCurrentPersone__START, currentUser),
        yield takeEvery(setNickPhone__START, changeNickPhone),
        yield takeEvery(deleteUser__START, deleteUser),
        yield takeEvery(getDataCurrentUser__START, currentUser),
        yield takeEvery(createPost__START, createPost),
        yield takeEvery(getAllPosts__START, getAllPosts),
        yield takeEvery(deletePost__START, deletePost),
        yield takeEvery(getCurrentUserPosts__START, getCurrentUserPosts),
        yield takeEvery(changePostInf__START, changePostInf),
        yield takeEvery(sendComment__START, sendComment),
        yield takeEvery(changeComment__START, changeComment),
        yield takeEvery(deleteComment__START, deleteComment),
    ])
}