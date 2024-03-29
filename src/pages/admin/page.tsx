import { useEffect, useState } from 'react'
import { AiOutlinePlus, AiOutlineLoading } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import Card from '../../components/Card'
import Popup from '../../components/Popup'

import api from '../../api/server'
import { Company } from '../../interfaces/company'
import { useLogin } from '../../redux/sliceLogin'

export default function Admin() {
  // States
  const [companies, setCompanies] = useState<Company[]>([])
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState<boolean>(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState<boolean>(false)
  const [company, setCompany] = useState<Company>({} as Company)
  const [search, setSearch] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  // Redux and token header
  const { token } = useSelector(useLogin)
  const navigate = useNavigate()
  // const url = window.location.href

  // Validate token
  useEffect(() => {
    api
      .post('/login/validate', { token })
      .then((res) => {
        console.log(res.data.message)
      })
      .catch((err) => {
        console.log(err.response.data.message)
        navigate('/login')
      })
  }, [navigate, token])

  // Get companies
  useEffect(() => {
    api
      .get('/companies')
      .then((res) => {
        setCompanies(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-12 p-8">
        <div className="mt-24 flex w-full flex-row items-center justify-center gap-4">
          <input
            type="text"
            className="w-full rounded-lg bg-gray-300 px-4 py-2 outline-none drop-shadow-sm placeholder:font-montserrat sm:w-1/2"
            placeholder="🔎 Pesquisar"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
            onClick={() => setIsCreateModalOpen(true)}
            className="flex items-center justify-center text-xl"
          >
            <AiOutlinePlus />
          </Button>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {loading ? (
            <AiOutlineLoading className="col-span-4 animate-spin text-8xl text-sky-600" />
          ) : search !== '' ? (
            companies.map(
              (company) =>
                company.name.toLowerCase().includes(search.toLowerCase()) && (
                  <Card
                    key={company.id}
                    company={company}
                    openModal={setIsUpdateModalOpen}
                    setState={setCompany}
                  />
                )
            )
          ) : (
            companies.map((company) => (
              <Card
                key={company.id}
                company={company}
                openModal={setIsUpdateModalOpen}
                setState={setCompany}
              />
            ))
          )}
        </div>
        {isUpdateModalOpen && <Popup company={company} disposeModal={setIsUpdateModalOpen} />}
        {isCreateModalOpen && <Popup disposeModal={setIsCreateModalOpen} />}
      </main>
    </>
  )
}
