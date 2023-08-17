export default function Navbar() {
  type Path = {
    name: string
    path: string
  }
  const links: Path[] = [
    { name: 'Home', path: '/' },
    { name: 'Api', path: '/api' }
  ]

  return (
    <nav className="w-full fixed flex flex-row justify-center items-center bg-cyan-800 py-4 gap-8 drop-shadow-md">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.path}
          className="transform text-2xl text-white transition-all duration-500 hover:scale-105"
        >
          {link.name}
        </a>
      ))}
    </nav>
  )
}
