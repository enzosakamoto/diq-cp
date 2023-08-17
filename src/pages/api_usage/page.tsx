import { useState } from 'react'

import Button from '../../components/Button'

import { getDataByCep } from '../../api/cep'

export default function Api() {
  type Cep = {
    cep: string
    street: string
    number: string
    neighborhood: string
    city: string
    state: string
  }

  const [response, setResponse] = useState<Cep>({
    cep: '',
    street: '',
    number: '',
    neighborhood: '',
    city: '',
    state: ''
  })
  const [input, setInput] = useState<string>('')

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (input.length !== 8 || isNaN(Number(input))) {
      alert('Invalid CEP')
      return
    }
    getDataByCep(input)
      .then((res) => {
        setResponse({
          cep: res.cep,
          street: res.logradouro,
          number: res.complemento,
          neighborhood: res.bairro,
          city: res.localidade,
          state: res.uf
        })
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <main className="flex h-screen w-full flex-col gap-14 items-center justify-center bg-gradient-to-b from-white to-pink-200">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 justify-center items-center"
        >
          <div className="flex gap-4 items-center justify-center flex-col">
            <label className="font-semibold text-xl">
              Type a Brazilian Zip Code:
            </label>
            <input
              placeholder="01001000"
              type="text"
              name="cep"
              onChange={(event) => setInput(event.target.value)}
              className="rounded px-2 py-2 outline-none w-32 text-xl drop-shadow-sm"
            />
          </div>
          <Button className="mt-4" type="submit">
            Submit
          </Button>
        </form>
        {response.cep && (
          <div className="p-8 rounded-xl drop-shadow-md bg-sky-100 bg-opacity-80 justify-center items-center">
            {Object.values(response).map((value, index) => (
              <p key={index} className="text-xl text-center">
                {value}
              </p>
            ))}
          </div>
        )}
      </main>
    </>
  )
}
