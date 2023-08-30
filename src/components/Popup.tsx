import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'

import { Company } from '../interfaces/company'
import { useLogin } from '../redux/sliceLogin'
import Button from './Button'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { z } from 'zod'

const companySchema = z.object({
  name: z
    .string()
    .min(4, 'Nome deve ter mais que 4 caracteres')
    .nonempty('Nome não pode ser vazio'),
  image: z.string().url('Link de imagem inválido').nonempty('Imagem não pode ser vazia'),
  description: z
    .string()
    .min(10, 'Descrição deve ter mais que 10 caracteres')
    .nonempty('Descrição não pode ser vazia'),
  link: z.string().url('Link de website inválido').nonempty('Website não pode ser vazio')
})

export default function Popup({
  id,
  disposeModal
}: {
  id: string
  disposeModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  // States
  const [company, setCompany] = useState<Company>({} as Company)
  // const [errors, setErrors] = useState<UpdateError>({} as UpdateError)

  // Get Company
  useEffect(() => {
    axios
      .get(`http://localhost:3001/companies/${id}`)
      .then((res) => {
        setCompany(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id])

  // Redux and token header
  const { token } = useSelector(useLogin)
  const header = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  // Validation
  // const handleValidation = (): boolean => {
  //   setErrors({} as UpdateError)
  //   let error = false

  //   if (company.name.length < 4) {
  //     setErrors({ ...errors, name: { message: 'Nome deve ter mais que 4 caracteres' } })
  //     error = true
  //   }

  //   if (company.name === '') {
  //     setErrors({ ...errors, name: { message: 'Nome não pode ser vazio' } })
  //     error = true
  //   }

  //   if (company.image === '') {
  //     setErrors({ ...errors, image: { message: 'Imagem não pode ser vazia' } })
  //     error = true
  //   }

  //   const linkValidation = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'

  //   if (!company.image.match(linkValidation)) {
  //     setErrors({ ...errors, image: { message: 'Link de imagem inválido' } })
  //     error = true
  //   }

  //   if (company.description === '') {
  //     setErrors({ ...errors, description: { message: 'Descrição não pode ser vazia' } })
  //     error = true
  //   }

  //   if (company.description.length < 10) {
  //     setErrors({
  //       ...errors,
  //       description: { message: 'Descrição deve ter mais que 10 caracteres' }
  //     })
  //     error = true
  //   }

  //   if (company.link === '') {
  //     setErrors({ ...errors, link: { message: 'Website não pode ser vazio' } })
  //     error = true
  //   }

  //   if (!company.link.match(linkValidation)) {
  //     setErrors({ ...errors, link: { message: 'Link de website inválido' } })
  //     error = true
  //   }

  //   if (!error) {
  //     alert('Empresa atualizada com sucesso!')
  //     return true
  //   }
  //   return false
  // }

  // Submit
  const handleUpdate = async (data: Omit<Company, 'id'>) => {
    await axios
      .patch(`http://localhost:3001/companies/${company.id}`, data, header)
      .then((res) => {
        console.log(res.data)
        disposeModal(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  // Cancel
  const handleCancel = () => {
    disposeModal(false)
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Omit<Company, 'id'>>({
    resolver: zodResolver(companySchema)
  })

  return (
    <div className="absolute z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-60">
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="flex h-4/5 w-1/2 flex-col justify-center gap-8 rounded-lg bg-white p-8 text-black drop-shadow-md"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl">Nome:</label>
            <input
              defaultValue={company.name}
              className="rounded-lg bg-gray-300 p-2 text-xl"
              type="text"
              {...register('name')}
            />
            <span className="text-red-800">{errors.name && errors.name.message}</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl">Imagem:</label>
            <input
              defaultValue={company.image}
              className="rounded-lg bg-gray-300 p-2 text-xl"
              type="text"
              {...register('image')}
            />
            <span className="text-red-800">{errors.image && errors.image.message}</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl">Descrição:</label>
            <textarea
              defaultValue={company.description}
              className="h-32 resize-none rounded-lg bg-gray-300 p-2 text-xl"
              {...register('description')}
            />
            <span className="text-red-800">{errors.description && errors.description.message}</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl">Website:</label>
            <input
              defaultValue={company.link}
              className="rounded-lg bg-gray-300 p-2 text-xl"
              type="text"
              {...register('link')}
            />
            <span className="text-red-800">{errors.link && errors.link.message}</span>
          </div>
        </div>
        <div className="flex w-full flex-row justify-center gap-8">
          <Button type="submit" color="primary">
            Salvar
          </Button>
          <Button onClick={handleCancel} color="secondary">
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}
