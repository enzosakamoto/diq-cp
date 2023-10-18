import { Company } from '../interfaces/company'
import { nameCaptalized } from '../utils/nameCaptalized'

export default function Square({ company }: { company: Company }) {
  return (
    <a
      href={`/companies/${company.id}`}
      className="relative flex translate-y-0 transform flex-col justify-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-5 hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.25)]"
    >
      <div className="group relative m-0 flex h-56 w-56 rounded-xl sm:mx-auto sm:h-72 sm:w-72 sm:max-w-lg">
        <div className="z-10 h-full w-full overflow-hidden rounded-xl bg-white opacity-80 transition duration-300 ease-in-out group-hover:opacity-100">
          <img
            src={company.image}
            className="block h-full w-full scale-100 transform object-contain object-center p-6 opacity-100 transition duration-300 group-hover:scale-110"
            alt={`Logo da ${company.name}`}
          />
        </div>
        <div className="absolute bottom-0 z-20 m-0 w-5/6 pb-4 ps-4 opacity-0 transition duration-300 ease-in-out group-hover:-translate-y-1 group-hover:translate-x-3 group-hover:scale-110 group-hover:opacity-100">
          <h1 className="rounded bg-white p-1 font-montserrat text-sm font-bold text-black">
            {nameCaptalized(company.name)}
          </h1>
        </div>
      </div>
    </a>
  )
}
