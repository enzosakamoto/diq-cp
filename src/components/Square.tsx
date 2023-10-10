import { Company } from '../interfaces/company'

export default function Square({ company }: { company: Company }) {
  return (
    <a
      href={`/companies/${company.id}`}
      className="relative flex flex-col justify-center drop-shadow-xl"
    >
      <div className="group relative m-0 flex h-56 w-56 rounded-xl sm:mx-auto sm:h-72 sm:w-72 sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl bg-white opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
          <img
            src={company.image}
            className="block h-full w-full scale-100 transform object-contain object-center p-6 opacity-100 transition duration-300 group-hover:scale-110"
            alt={`Logo da ${company.name}`}
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
