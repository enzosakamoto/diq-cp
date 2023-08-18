import Button from '../../components/Button'

export default function Login() {
  return (
    <main className="flex h-screen w-full items-center justify-center bg-violet-950 font-montserrat">
      <form className="flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col justify-center gap-2">
          <label className="text-3xl text-white">Login</label>
          <input className="rounded-lg p-2 text-2xl" type="text" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-3xl text-white">Senha</label>
          <input className="rounded-lg p-2 text-2xl" type="password" />
        </div>
        <Button type="submit">enviar</Button>
      </form>
    </main>
  )
}
