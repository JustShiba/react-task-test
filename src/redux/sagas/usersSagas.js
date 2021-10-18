import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects'

import { addUsers, apiCallUsers, addUsersSuccess } from '../reducers/usersReducer'


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIzMzE5ZjQ0Yy1kMWU0LTQ2YjMtOWJkZS0xMjJjMmRhNmI2NDUiLCJpYXQiOjE2MzQ1ODcyNDUsImV4cCI6MTYzNDU5NDQ0NX0.7vGkHKAlgJuaFtrEkqvnBFMi2zTdgFg4_ZvgnEHNX4w"
const user = {
    'email': 'ilya@gmail.com', 
    'password': '123456789'
}

const config = {
    'headers': {
        'Authorization': `Bearer ${token}`
    }
}

const getResponseUsers = () => {
    return axios.get('http://178.124.178.6:3000/users', config)
                .then(resp => resp.data);
}

function* loadUsers() {
    const response = yield getResponseUsers();
    yield put(addUsers(response))
    yield put(addUsersSuccess())
}

export default function* initialUsersSaga() {
    yield takeEvery(apiCallUsers, loadUsers)
}
