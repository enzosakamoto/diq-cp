import { useSelector } from 'react-redux'

import { useLogin } from '../../redux/sliceLogin'

export default function Home() {
  // Redux Action
  const { token } = useSelector(useLogin)
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-14 bg-cp-building bg-cover font-montserrat">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-4xl text-white">CENTRO DE PESQUISA</h2>
          <h2 className="text-6xl font-bold text-white">DIVISÃO DE INOVAÇÃO E QUALIDADE</h2>
          <h2 className="text-4xl text-white">EMPRESAS PARCEIRAS</h2>
          <span className="text-4xl text-white">{token}</span>
        </div>
      </main>
    </>
  )
}
