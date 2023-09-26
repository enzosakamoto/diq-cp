import { Company } from '../interfaces/company'

export default function Square({ company }: { company: Company }) {
  return (
    <a className="" href={`/companies/${company.id}`}>
      <img
        src={company.image}
        className="h-32 w-32 transform rounded-t-lg border-b-2 border-sky-400 bg-white object-contain p-4 drop-shadow-md transition-all duration-500 hover:scale-105 hover:border-sky-800 xl:h-56 xl:w-56"
        alt={`Logo da ${company.name}`}
      />
    </a>
  )
}
