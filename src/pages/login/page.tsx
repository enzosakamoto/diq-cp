import Button from '../../components/Button'

export default function Login() {
  return (
    <main className="flex w-full h-screen justify-center items-center font-montserrat bg-violet-950">
      <form className="flex flex-col gap-8 items-center justify-center">
        <div className="flex flex-col gap-2 justify-center">
          <label className="text-white text-3xl">Login</label>
          <input className="text-2xl rounded-lg p-2" type="text" />
        </div>
        <div className="flex flex-col gap-2 justify-center">
          <label className="text-white text-3xl">Senha</label>
          <input className="text-2xl rounded-lg p-2" type="password" />
        </div>
        <Button type="submit">enviar</Button>
      </form>
    </main>
  )
}
