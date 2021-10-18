import { configureStore, combineReducers } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import { usersReducer } from './usersReducer'
import initialUsersSaga from '../sagas/usersSagas';


const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    toolkit: usersReducer.reducer
})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(initialUsersSaga);

export default store;