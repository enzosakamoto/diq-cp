import { BiExit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logoimt.png'

export default function AdminNavbar() {
  const navigate = useNavigate()

  const handleExit = () => {
    localStorage.removeItem('persist:root')
    navigate('/')
  }

  return (
    <nav className="fixed z-10 flex w-full flex-row items-center justify-between gap-8 bg-sky-800 px-8 py-4 font-montserrat drop-shadow-md">
      <a className="transform transition-all duration-200 hover:scale-105" href="/">
        <img src={logo} alt="Logo IMT" />
      </a>
      <div className="flex flex-row items-center justify-center gap-8 text-2xl text-white">
        <a className="transform transition-all duration-200 hover:scale-105" href="/forms">
          Formulário
        </a>
        <a className="transform transition-all duration-200 hover:scale-105" href="/companies">
          Empresas
        </a>
        <a className="transform transition-all duration-200 hover:scale-105" onClick={handleExit}>
          <BiExit className="text-3xl" />
        </a>
      </div>
    </nav>
  )
}
