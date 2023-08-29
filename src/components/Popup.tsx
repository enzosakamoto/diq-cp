import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Company } from '../interfaces/company'
import Button from './Button'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { z } from 'zod'

const companySchema = z.object({
  name: z.string().nonempty('Preencha o campo do nome'),
  image: z
    .string()
    .nonempty('Preencha o campo da imagem')
    .url('Preencha o campo da imagem com uma URL válida'),
  description: z.string().nonempty('Preencha o campo da descrição'),
  link: z
    .string()
    .nonempty('Preencha o campo do link')
    .url('Preencha o campo do link com uma URL válida')
})

export default function Popup({
  id,
  disposeModal
}: {
  id: string
  disposeModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const handleUpdate = () => {
    disposeModal(false)
  }
  const [company, setCompany] = useState<Company>({} as Company)
  useEffect(() => {
    axios
      .get(`http://localhost:3001/companies/${id}`)
      .then((res) => {
        setCompany(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Company>({
    resolver: zodResolver(companySchema)
  })
  return (
    <div className="absolute z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-60">
      <form className="flex h-4/5 w-1/2 flex-col justify-center rounded-lg bg-white p-8 text-black drop-shadow-md">
        <div className="flex flex-col justify-center gap-2">
          <label className="text-2xl">Nome:</label>
          <input
            value={company.name}
            className="rounded-lg bg-gray-300 p-2 text-xl"
            type="text"
            {...register('name')}
          />
          <span className="text-red-800">{errors.name && errors.name.message}</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-2xl">Imagem:</label>
          <input
            value={company.image}
            className="rounded-lg bg-gray-300 p-2 text-xl"
            type="text"
            {...register('image')}
          />
          <span className="text-red-800">{errors.image && errors.image.message}</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-2xl">Descrição:</label>
          <input
            value={company.description}
            className="h-32 rounded-lg bg-gray-300 p-2 text-xl"
            type="text"
            {...register('description')}
          />
          <span className="text-red-800">{errors.description && errors.description.message}</span>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <label className="text-2xl">Website:</label>
          <input
            value={company.link}
            className="rounded-lg bg-gray-300 p-2 text-xl"
            type="text"
            {...register('link')}
          />
          <span className="text-red-800">{errors.link && errors.link.message}</span>
        </div>
        <Button onClick={handleSubmit(handleUpdate)} color="primary">
          Salvar
        </Button>
      </form>
    </div>
  )
}
