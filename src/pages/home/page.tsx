export default function Home() {
  return (
    <>
      <main className="flex h-screen w-full flex-col items-center justify-center gap-14 bg-cp-building bg-cover bg-no-repeat font-montserrat">
        <div className="flex w-full flex-col items-center justify-center gap-4 px-8 sm:px-16">
          <h2 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl">
            CENTRO DE PESQUISA
          </h2>
          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl">
            DIVISÃO DE INOVAÇÃO E QUALIDADE
          </h2>
          <h2 className="text-xl text-white sm:text-2xl md:text-3xl lg:text-4xl">
            EMPRESAS PARCEIRAS
          </h2>
        </div>
      </main>
    </>
  )
}
