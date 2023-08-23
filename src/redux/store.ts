import sliceLogin from './sliceLogin'

import { configureStore } from '@reduxjs/toolkit'

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: {
    login: sliceLogin
  }
})

export default store
