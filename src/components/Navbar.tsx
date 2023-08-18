import { AiOutlineLogin } from 'react-icons/ai'

import logo from '../assets/logoimt.png'

export default function Navbar() {
  return (
    <nav className="w-full fixed flex flex-row justify-between px-8 items-center bg-transparent py-4 gap-8 drop-shadow-md font-montserrat">
      <a
        className="transform transition-all duration-200 hover:scale-105"
        href="/"
      >
        <img src={logo} alt="Logo IMT" />
      </a>
      <div className="text-2xl text-white flex flex-row justify-center items-center gap-8">
        <a
          className="transform transition-all duration-200 hover:scale-105"
          href="/forms"
        >
          Formulário
        </a>
        <a
          className="transform transition-all duration-200 hover:scale-105"
          href="/companies"
        >
          Empresas
        </a>
        <a
          className="transform transition-all duration-200 hover:scale-105"
          href="/login"
        >
          <AiOutlineLogin className="text-3xl" />
        </a>
      </div>
    </nav>
  )
}
