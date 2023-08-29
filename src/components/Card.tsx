import { Company } from '../interfaces/company'
import Button from './Button'

export default function Card({
  company,
  setState
}: {
  company: Company
  setState: React.Dispatch<React.SetStateAction<string>>
}) {
  const handleClick = () => {
    setState(company.id)
  }

  return (
    <div className="flex w-full font-montserrat">
      <div className="flex h-1/2 w-full flex-col items-center gap-4 rounded-lg bg-cyan-400 bg-opacity-20 p-4 drop-shadow-md xl:h-72 xl:flex-row xl:items-center">
        <img
          src={company.image}
          className="h-32 w-32 rounded-lg bg-white object-contain drop-shadow-md xl:h-56 xl:w-56"
          alt={`Logo da ${company.name}`}
        />
        <div className="flex w-full flex-col justify-center gap-8 p-4 xl:w-2/3">
          <div className="flex flex-col justify-center gap-4">
            <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-xl font-bold">
              {company.name}
            </h1>
            <p className="text-md h-1/3 overflow-hidden text-ellipsis whitespace-nowrap text-justify">
              {company.description}
            </p>
            <p className="text-md overflow-hidden text-ellipsis">{company.link}</p>
          </div>
          <div className="flex flex-row items-center justify-center gap-8">
            <Button onClick={handleClick} size="md">
              Editar
            </Button>
            <Button size="md" color="secondary">
              Excluir
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
