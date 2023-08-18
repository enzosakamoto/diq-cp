import { AiOutlineLogin } from 'react-icons/ai'

import logo from '../assets/logoimt.png'

export default function Navbar() {
  return (
    <nav className="fixed flex w-full flex-row items-center justify-between gap-8 bg-transparent px-8 py-4 font-montserrat drop-shadow-md">
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
        <a className="transform transition-all duration-200 hover:scale-105" href="/login">
          <AiOutlineLogin className="text-3xl" />
        </a>
      </div>
    </nav>
  )
}
