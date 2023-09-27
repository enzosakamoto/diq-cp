import { AiOutlineLogin } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logoimt.png'

export default function Navbar() {
  const navigate = useNavigate()

  const handleExit = () => {
    localStorage.removeItem('persist:root')
    navigate('/')
  }

  // URL for admin control
  const url = window.location.href

  return (
    <nav
      className={`fixed z-10 flex w-full flex-row items-center justify-between gap-8 px-8 py-4 font-montserrat drop-shadow-md ${
        url.includes('admin') || url.includes('companies') ? 'bg-sky-800' : 'bg-transparent'
      }`}
    >
      <a className="transform transition-all duration-500 hover:scale-105" href="/">
        <img src={logo} alt="Logo IMT" />
      </a>
      <div className="flex flex-row items-center justify-center gap-8 text-2xl text-white">
        <a className="transform transition-all duration-500 hover:scale-105" href="/forms">
          Formulário
        </a>
        <a className="transform transition-all duration-500 hover:scale-105" href="/companies">
          Empresas
        </a>
        {url.includes('admin') ? (
          <a
            data-testid="admin"
            className="transform transition-all duration-500 hover:scale-105"
            onClick={handleExit}
          >
            <BiExit className="text-3xl" />
          </a>
        ) : (
          <a
            data-testid="user"
            className="transform transition-all duration-500 hover:scale-105"
            href="/login"
          >
            <AiOutlineLogin className="text-3xl" />
          </a>
        )}
      </div>
    </nav>
  )
}
