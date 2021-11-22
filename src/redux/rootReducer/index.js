import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { usersReducer } from 'redux/users/usersReducer';
import { authReducer } from 'redux/auth/authReducer';
import { postsReducer } from 'redux/posts/postsReducer';
import allSagas from 'redux/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    users: usersReducer.reducer,
    authorization: authReducer.reducer,
    posts: postsReducer.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(allSagas);

export default store;
