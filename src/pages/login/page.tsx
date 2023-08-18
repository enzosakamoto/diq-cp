import { useState } from 'react'

import Button from '../../components/Button'

interface Login {
  username: string
  password: string
}

export default function Login() {
  const [login, setLogin] = useState<Login>({
    username: '',
    password: ''
  })
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      login.username === import.meta.env.VITE_USERNAME &&
      login.password === import.meta.env.VITE_PASSWORD
    ) {
      alert('Login realizado com sucesso!')
    }
  }
  return (
    <main className="flex h-screen w-full items-center justify-center bg-violet-950 font-montserrat">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-center gap-2">
          <label className="text-3xl text-white">Login</label>
          <input
            value={login.username}
            onChange={(event) => setLogin({ ...login, username: event.target.value })}
            className="rounded-lg p-2 text-2xl"
            type="text"
          />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-3xl text-white">Senha</label>
          <input
            value={login.password}
            onChange={(event) => setLogin({ ...login, password: event.target.value })}
            className="rounded-lg p-2 text-2xl"
            type="password"
          />
        </div>
        <Button type="submit">enviar</Button>
      </form>
    </main>
  )
}
