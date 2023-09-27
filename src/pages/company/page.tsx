import { useState, useEffect } from 'react'

import api from '../../api/server'
import { Company } from '../../interfaces/company'

export default function Company() {
  const [company, setCompany] = useState<Company>({} as Company)

  useEffect(() => {
    const url = window.location.href

    api
      .get(`/companies/${url.split('/')[4]}`)
      .then((res) => {
        setCompany(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <main className="flex h-screen w-full flex-col justify-center pt-28 font-montserrat">
        <section className="flex h-full w-full flex-row items-center justify-center gap-20">
          <a
            className="flex h-72 w-72 transform justify-center rounded-lg bg-white transition-all duration-500 hover:scale-105"
            href={company.link}
            target="_blank"
            rel="noreferrer"
          >
            <img className="object-contain" src={company.image} alt={`Logo da ${company.name}`} />
          </a>
          <div className="flex w-1/2 flex-col gap-8">
            <h1 className="text-4xl font-bold">{company.name}</h1>
            <p className="text-xl">{company.description}</p>
          </div>
        </section>
      </main>
    </>
  )
}
