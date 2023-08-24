import sliceLogin from './sliceLogin'

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export type RootState = ReturnType<typeof store.getState>

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  login: sliceLogin
})

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
  reducer: persistedReducer
})

export default store
