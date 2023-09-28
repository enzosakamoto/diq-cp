import { useEffect, useState } from 'react'

import Square from '../../components/Square'

import api from '../../api/server'
import { Company } from '../../interfaces/company'

export default function Companies() {
  const [search, setSearch] = useState<string>('')
  const [companies, setCompanies] = useState<Company[]>([])

  // Get companies
  useEffect(() => {
    api
      .get('/companies')
      .then((res) => {
        setCompanies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <main className="flex w-full flex-col justify-center py-40">
        <section className="flex w-full flex-col items-center justify-center">
          <div className="flex w-full items-center justify-center">
            <input
              type="text"
              className="w-3/5 rounded-lg bg-gray-300 px-4 py-2 outline-none drop-shadow-sm placeholder:font-montserrat md:w-1/3"
              placeholder="🔎 Pesquisar"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="mt-12 grid grid-cols-1 items-center gap-12 px-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {search !== ''
              ? companies.map(
                  (company) =>
                    company.name.toLowerCase().includes(search.toLowerCase()) && (
                      <Square key={company.id} company={company} />
                    )
                )
              : companies.map((company) => <Square key={company.id} company={company} />)}
          </div>
        </section>
      </main>
    </>
  )
}
