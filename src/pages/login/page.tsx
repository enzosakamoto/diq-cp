import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'

import api from '../../api/server'
import { setLogin, useLogin } from '../../redux/sliceLogin'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().nonempty('Preencha o campo do usuário'),
  password: z.string().nonempty('Preencha o campo da senha')
})

export type User = z.infer<typeof loginSchema>

export default function Login() {
  // Redux Action
  const { token } = useSelector(useLogin)
  const dispatch = useDispatch()

  // Navigate
  const navigate = useNavigate()

  // Token validation
  useEffect(() => {
    api
      .post('/login/validate', { token })
      .then((res) => {
        console.log(res.data.message)
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err.response.data.message)
      })
  })

  // Submit
  const handleLogin = (data: User) => {
    api
      .post('/login', data)
      .then((res) => {
        const { message, token } = res.data
        console.log(message)
        dispatch(setLogin({ token }))
        navigate('/admin')
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data)
        dispatch(setLogin({ token: '' }))
      })
  }

  // Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: zodResolver(loginSchema),
    mode: 'onBlur'
  })

  return (
    <main className="flex h-screen w-full items-center justify-center bg-violet-950 font-montserrat">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col items-center justify-center gap-8 rounded-lg bg-blue-900 p-8 px-8 drop-shadow-lg sm:w-auto sm:p-10"
      >
        <div className="flex flex-col justify-center gap-2">
          <label className="text-xl text-white sm:text-3xl">Login</label>
          <input
            className="w-4/3 rounded-lg p-2 text-xl sm:w-auto sm:text-2xl"
            type="text"
            {...register('username')}
          />
          <span className="text-white">{errors.username && errors.username.message}</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-xl text-white sm:text-3xl">Senha</label>
          <input
            className="w-4/3 rounded-lg p-2 text-xl sm:w-auto sm:text-2xl"
            type="password"
            {...register('password')}
          />
          <span className="text-white">{errors.password && errors.password.message}</span>
        </div>
        <Button size="md" type="submit">
          Enviar
        </Button>
      </form>
    </main>
  )
}
