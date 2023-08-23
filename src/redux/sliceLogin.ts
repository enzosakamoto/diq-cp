import { RootState } from './store'

import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface Token {
  token: string
}

const INITIAL_STATE: Token = {
  token: 'teste'
}

const sliceLogin = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {
    setLogin(state, { payload }: PayloadAction<Token>) {
      state.token = payload.token
      console.log('payload', payload.token)
    }
  }
})

export default sliceLogin.reducer
export const { setLogin } = sliceLogin.actions

export const useLogin = (state: RootState) => {
  return state.login
}
