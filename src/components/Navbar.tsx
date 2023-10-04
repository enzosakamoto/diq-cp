import { useState } from 'react'
import { AiOutlineLogin, AiOutlineClose } from 'react-icons/ai'
import { BiExit } from 'react-icons/bi'
import { IoReorderThree } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

import logo from '../assets/logoimt.png'

export default function Navbar() {
  const navigate = useNavigate()
  const [open, setOpen] = useState<boolean>(false)

  const handleExit = () => {
    localStorage.removeItem('persist:root')
    navigate('/')
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  // URL for admin control
  const url = window.location.href

  return (
    <nav
      className={`fixed z-50 flex w-full flex-row items-center justify-between gap-8 px-8 py-4 font-montserrat drop-shadow-md ${
        url.includes('admin') || url.includes('companies') || url.includes('forms')
          ? 'bg-sky-800'
          : 'bg-transparent'
      }`}
    >
      <a className="transform transition-all duration-500 hover:scale-105" href="/">
        <img src={logo} className="w-4/5 md:w-auto" alt="Logo IMT" />
      </a>
      <div className="hidden flex-row items-center justify-center gap-8 text-2xl text-white md:flex">
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
      <div className="flex text-white md:hidden">
        <a className="transform transition-all duration-500 hover:scale-105" onClick={handleOpen}>
          <IoReorderThree className="text-4xl" />
        </a>
      </div>
      <div
        className={`fixed left-0 top-0 z-40 flex h-screen w-full transform flex-col items-center justify-center gap-8 bg-sky-800 text-2xl text-white transition-all duration-300 ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <a className="transform transition-all duration-500 hover:scale-105" onClick={handleOpen}>
          <AiOutlineClose className="text-3xl" />
        </a>
        <a className="transform transition-all duration-500 hover:scale-105" href="/">
          Home
        </a>
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
