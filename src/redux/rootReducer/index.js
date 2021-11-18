import { configureStore, combineReducers } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { usersReducer } from '../users/usersReducer';
import { authReducer } from '../auth/authReducer';
import { postsReducer } from '../posts/postsReducer';
import allSagas from '../rootSaga';

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
