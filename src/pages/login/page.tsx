import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { z } from 'zod'

const loginSchema = z.object({
  username: z.string().nonempty('Preencha o campo do usuário'),
  password: z.string().nonempty('Preenchao o campo da senha')
})

type User = z.infer<typeof loginSchema>

export default function Login() {
  const navigate = useNavigate()
  const handleLogin = (data: User) => {
    axios
      .post('http://localhost:3001/login', data)
      .then((res) => {
        console.log(res.data)
        navigate('/')
      })
      .catch((err) => console.log(err.response.data))
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({
    resolver: zodResolver(loginSchema)
  })
  return (
    <main className="flex h-screen w-full items-center justify-center bg-violet-950 font-montserrat">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col items-center justify-center gap-8"
      >
        <div className="flex flex-col justify-center gap-2">
          <label className="text-3xl text-white">Login</label>
          <input className="rounded-lg p-2 text-2xl" type="text" {...register('username')} />
          <span className="text-white">{errors.username && errors.username.message}</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-3xl text-white">Senha</label>
          <input className="rounded-lg p-2 text-2xl" type="password" {...register('password')} />
          <span className="text-white">{errors.password && errors.password.message}</span>
        </div>
        <Button type="submit">enviar</Button>
      </form>
    </main>
  )
}
