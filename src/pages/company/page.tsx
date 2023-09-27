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
      <main className="flex w-full flex-col justify-center pt-12 font-montserrat md:h-screen md:pt-28">
        <section className="flex h-full w-full flex-col items-center justify-center gap-12 px-12 py-12 md:flex-row md:gap-20 md:px-0 md:py-0">
          <a
            className="flex h-52 w-52 transform justify-center rounded-lg bg-white transition-all duration-500 hover:scale-105 md:h-72 md:w-72"
            href={company.link}
            target="_blank"
            rel="noreferrer"
          >
            <img className="object-contain" src={company.image} alt={`Logo da ${company.name}`} />
          </a>
          <div className="flex w-full flex-col gap-8 md:w-1/2">
            <h1 className="text-2xl font-bold md:text-4xl">{company.name}</h1>
            <p className="text-base md:text-xl">{company.description}</p>
          </div>
        </section>
      </main>
    </>
  )
}
