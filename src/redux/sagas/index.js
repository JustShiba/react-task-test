import { takeEvery, all } from 'redux-saga/effects'

import { apiCallUsers, getDataCurrentUser__START } from '../reducers/usersReducer'
import { loadUsers } from './usersSagas'
import { checkLogIn, logInSaga, signUpSaga } from './logSignSagas'
import { checkLogIn__START, getDataCurrentPersone__START } from '../reducers/logSignReducer'
import { 
    deleteUser__START,
    logIn__START, 
    setNick__START, 
    setPhone__START, 
    signUp__START 
} from '../reducers/logSignReducer'
import { 
    changeNick, 
    currentUser, 
    changePhone, 
    deleteUser,
} from './currentUserSagas'
import { 
    changeComment__START,
    changePostInf__START,
    createPost__START, 
    deleteComment__START, 
    deletePost__START, 
    getAllPosts__START, 
    getCurrentUserPosts__START, 
    sendComment__START
} from '../reducers/postsReducer'
import { 
    changeComment,
    changePostInf, 
    createPost, 
    deleteComment, 
    deletePost, 
    getAllPosts, 
    getCurrentUserPosts, 
    sendComment
} from './postsSagas'


export default function* allSagas() {
    yield all([
        yield takeEvery(apiCallUsers, loadUsers),
        yield takeEvery(checkLogIn__START, checkLogIn),
        yield takeEvery(logIn__START, logInSaga),
        yield takeEvery(signUp__START, signUpSaga),
        yield takeEvery(getDataCurrentPersone__START, currentUser),
        yield takeEvery(setNick__START, changeNick),
        yield takeEvery(setPhone__START, changePhone),
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
        // yield takeEvery(localChangeComment, localChangeCommentSaga),
    ])
}