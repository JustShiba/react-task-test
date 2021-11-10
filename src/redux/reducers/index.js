import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { usersReducer } from './usersReducer'
import { logSignReducer } from './logSignReducer'
import { postsReducer } from './postsReducer'
import allSagas from '../sagas'


const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    users: usersReducer.reducer,
    authorization: logSignReducer.reducer,
    posts: postsReducer.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(allSagas);

export default store;