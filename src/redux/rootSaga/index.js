import { takeEvery, all } from 'redux-saga/effects';

import { addUsersStart, getDataCurrentUserStart } from '../users/usersReducer';
import { loadUsers } from '../users/usersSagas';
import { checkLogIn, logInSaga, signUpSaga } from '../auth/authSagas';
import { checkLogInStart, getDataCurrentPersonStart } from '../auth/authReducer';
import { deleteUserStart, logInStart, setNickPhoneStart, signUpStart } from '../auth/authReducer';
import { changeNickPhone, currentUser, deleteUser } from '../users/currentUserSagas';
import {
    changeCommentStart,
    changePostInfStart,
    createPostStart,
    deleteCommentStart,
    deletePostStart,
    getAllPostsStart,
    getCurrentUserPostsStart,
    sendCommentStart,
} from '../posts/postsReducer';
import {
    changeComment,
    changePostInf,
    createPost,
    deleteComment,
    deletePost,
    getAllPosts,
    getCurrentUserPosts,
    sendComment,
} from '../posts/postsSagas';

export default function* allSagas() {
    yield all([
        yield takeEvery(checkLogInStart, checkLogIn),
        yield takeEvery(addUsersStart, loadUsers),
        yield takeEvery(signUpStart, signUpSaga),
        yield takeEvery(logInStart, logInSaga),
        yield takeEvery(getDataCurrentPersonStart, currentUser),
        yield takeEvery(setNickPhoneStart, changeNickPhone),
        yield takeEvery(deleteUserStart, deleteUser),
        yield takeEvery(getDataCurrentUserStart, currentUser),
        yield takeEvery(createPostStart, createPost),
        yield takeEvery(getAllPostsStart, getAllPosts),
        yield takeEvery(deletePostStart, deletePost),
        yield takeEvery(getCurrentUserPostsStart, getCurrentUserPosts),
        yield takeEvery(changePostInfStart, changePostInf),
        yield takeEvery(sendCommentStart, sendComment),
        yield takeEvery(changeCommentStart, changeComment),
        yield takeEvery(deleteCommentStart, deleteComment),
    ]);
}
