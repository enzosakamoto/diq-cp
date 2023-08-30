import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
// import { ToastContainer, toast } from 'react-toastify'

import { Company } from '../interfaces/company'
import { useLogin } from '../redux/sliceLogin'
import Button from './Button'

import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { z } from 'zod'

import 'react-toastify/dist/ReactToastify.css'

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
  company,
  disposeModal
}: {
  company: Company
  disposeModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  // Redux and token header
  const { token } = useSelector(useLogin)
  const header = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  // Submit
  const handleUpdate = async (data: Omit<Company, 'id'>) => {
    await axios
      .patch(`http://localhost:3001/companies/${company.id}`, data, header)
      .then((res) => {
        console.log(res.data)
        alert('Empresa atualizada com sucesso! 🤩')
        // toast.success('Empresa atualizada com sucesso! 🤩', {
        //   position: 'top-right',
        //   autoClose: 1000,
        //   hideProgressBar: false,
        //   closeOnClick: true,
        //   draggable: true,
        //   progress: undefined,
        //   theme: 'colored'
        // })
        // setTimeout(() => {
        // }, 1500)
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
    resolver: zodResolver(companySchema),
    defaultValues: {
      name: company.name,
      image: company.image,
      description: company.description,
      link: company.link
    }
  })

  return (
    <div className="fixed left-0 top-0 z-20 flex min-h-screen w-full items-center justify-center bg-black bg-opacity-80 font-montserrat">
      <form
        onSubmit={handleSubmit(handleUpdate)}
        className="flex h-4/5 w-4/5 flex-col justify-center gap-8 rounded-lg bg-white p-8 text-black drop-shadow-md lg:w-1/2"
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl font-medium">Nome:</label>
            <input
              className="rounded-lg bg-gray-300 p-2 text-xl"
              type="text"
              {...register('name')}
            />
            <span className="text-red-800">{errors.name && errors.name.message}</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl font-medium">Imagem:</label>
            <input
              className="rounded-lg bg-gray-300 p-2 text-xl"
              type="text"
              {...register('image')}
            />
            <span className="text-red-800">{errors.image && errors.image.message}</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl font-medium">Descrição:</label>
            <textarea
              className="h-36 resize-none rounded-lg bg-gray-300 p-2 text-xl"
              {...register('description')}
            />
            <span className="text-red-800">{errors.description && errors.description.message}</span>
          </div>
          <div className="flex flex-col justify-center gap-2">
            <label className="text-2xl font-medium">Website:</label>
            <input
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
      {/* <ToastContainer /> */}
    </div>
  )
}
