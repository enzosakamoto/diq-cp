import { Company } from '../interfaces/company'

export default function Square({ company }: { company: Company }) {
  return (
    <a
      href={`/companies/${company.id}`}
      className="relative flex flex-col justify-center overflow-hidden drop-shadow-xl"
    >
      <div className="absolute inset-0 bg-center drop-shadow-xl"></div>
      <div className="group relative m-0 flex h-72 w-72 rounded-xl sm:mx-auto sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl bg-white opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
          <img
            src={company.image}
            className="animate-fade-in block h-full w-full scale-100 transform object-contain object-center p-6 opacity-100 transition duration-300 group-hover:scale-110"
            alt=""
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 pb-4 ps-4 opacity-0 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
          <h1 className="font-montserrat text-lg font-bold text-black">
            {company.name.split(' ')[0]}
          </h1>
        </div>
      </div>
    </a>
  )
}
