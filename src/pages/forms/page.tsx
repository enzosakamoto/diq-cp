import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineLoading } from 'react-icons/ai'

import Button from '../../components/Button'

import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const formsSchema = z.object({
  name: z
    .string()
    .nonempty('Preencha o campo do nome')
    .min(3, 'O nome deve ter no mínimo 3 caracteres')
    .refine((value) => /^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(value), 'O nome deve conter apenas letras'),
  company: z
    .string()
    .nonempty('Preencha o campo da empresa')
    .min(3, 'O nome da empresa deve ter no mínimo 3 caracteres')
    .refine(
      (value) => /^([a-zA-Z]|[0-9])+(\s([a-zA-Z]|[0-9])+)*$/.test(value),
      'O nome da empresa deve conter apenas letras ou números'
    ),
  cellphone: z
    .string()
    .nonempty('Preencha o campo do telefone')
    .min(11, 'O telefone deve ter no mínimo 11 números')
    .max(12, 'O telefone deve ter no máximo 12 números')
    .refine((value) => /^[0-9]+$/.test(value), 'O telefone deve conter apenas números'),
  email: z.string().nonempty('Preencha o campo do e-mail').email('Digite um e-mail válido'),
  message: z
    .string()
    .nonempty('Preencha o campo da mensagem')
    .min(10, 'A mensagem deve ter no mínimo 10 caracteres')
})

export type Forms = z.infer<typeof formsSchema>

export default function Forms() {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSendForm = (data: Forms) => {
    console.table(data)
    setLoading(!loading)
    setTimeout(() => {
      setLoading(!loading)
      alert('Formulário enviado com sucesso!')
    }, 2000)
    console.log(loading)
  }

  // Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Forms>({
    resolver: zodResolver(formsSchema),
    mode: 'onBlur'
  })

  return (
    <main className="flex w-full flex-col items-center justify-center gap-8 py-24 font-montserrat">
      <h1 className="mt-20 text-3xl font-bold sm:text-4xl">Formulário</h1>
      <form
        onSubmit={handleSubmit(handleSendForm)}
        className="flex w-4/5 flex-col items-center justify-center gap-4"
      >
        <div className="flex w-full flex-col justify-center gap-2">
          <label className="text-xl text-gray-700 sm:text-2xl">Nome</label>
          <input
            className="w-full rounded-lg bg-gray-300 p-2 text-lg sm:text-xl"
            type="text"
            {...register('name')}
          />
          <span className="text-red-800">{errors.name && errors.name.message}</span>
        </div>
        <div className="flex w-full flex-col justify-center gap-2">
          <label className="text-xl text-gray-700 sm:text-2xl">Empresa</label>
          <input
            className="w-full rounded-lg bg-gray-300 p-2 text-lg sm:text-xl"
            type="text"
            {...register('company')}
          />
          <span className="text-red-800">{errors.company && errors.company.message}</span>
        </div>
        <div className="flex w-full flex-col justify-center gap-2">
          <label className="text-xl text-gray-700 sm:text-2xl">Telefone</label>
          <input
            className="w-full rounded-lg bg-gray-300 p-2 text-lg sm:text-xl"
            type="text"
            placeholder="Ex: 11999999999"
            {...register('cellphone')}
          />
          <span className="text-red-800">{errors.cellphone && errors.cellphone.message}</span>
        </div>
        <div className="flex w-full flex-col justify-center gap-2">
          <label className="text-xl text-gray-700 sm:text-2xl">Email</label>
          <input
            className="w-full rounded-lg bg-gray-300 p-2 text-lg sm:text-xl"
            type="text"
            {...register('email')}
          />
          <span className="text-red-800">{errors.email && errors.email.message}</span>
        </div>
        <div className="mt-4 flex w-full flex-col justify-center gap-2">
          <label className="text-center text-xl text-gray-700 sm:text-2xl">
            Conte mais sobre você e a sua empresa
          </label>
          <textarea
            className="h-36 w-full resize-none rounded-lg bg-gray-300 p-2 text-xl"
            {...register('message')}
          />
          <span className="text-red-800">{errors.message && errors.message.message}</span>
        </div>
        <Button disabled={loading} type="submit" className="flex justify-center">
          {loading ? <AiOutlineLoading className="animate-spin items-center text-2xl" /> : 'Enviar'}
        </Button>
      </form>
    </main>
  )
}
