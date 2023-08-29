import { useEffect, useState } from 'react'

import { Company } from '../interfaces/company'
import Button from './Button'

import axios from 'axios'

export default function Popup({ id }: { id: string }) {
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
  return (
    <div className="absolute z-20 flex h-full w-full items-center justify-center bg-black bg-opacity-60">
      <div className="bg-white drop-shadow-md">
        <p className="text-2xl">{company.name}</p>
        <p className="text-2xl">{company.description}</p>
        <p className="text-2xl">{company.link}</p>
        <p className="text-2xl">{company.image}</p>
        <Button color="primary">Salvar</Button>
      </div>
    </div>
  )
}
