import axios from 'axios';
import { put } from 'redux-saga/effects'

import { addUsers, addUsersSuccess } from '../reducers/usersReducer'
import { config } from './auth/auth'


const getresponseUsers = () => {
    return axios.get('http://178.124.178.6:3000/users', config)
                .then(resp => resp.data);
}

export function* loadUsers() {
    const response = yield getresponseUsers();
    yield put(addUsers(response))
    yield put(addUsersSuccess())
}

