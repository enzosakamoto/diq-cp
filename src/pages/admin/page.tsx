import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import AdminNavbar from '../../components/AdminNavbar'
import Card from '../../components/Card'
import Popup from '../../components/Popup'

import { Company } from '../../interfaces/company'
import { useLogin } from '../../redux/sliceLogin'

import axios from 'axios'

export default function Admin() {
  // States
  const [companies, setCompanies] = useState<Company[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [company, setCompany] = useState<Company>({} as Company)
  const [search, setSearch] = useState<string>('')

  // Redux and token header
  const { token } = useSelector(useLogin)
  const navigate = useNavigate()

  // Validate token
  useEffect(() => {
    axios
      .post('http://localhost:3001/login/validate', { token })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data.message)
        navigate('/login')
      })
  }, [navigate, token])

  // Get companies
  useEffect(() => {
    axios
      .get('http://localhost:3001/companies')
      .then((res) => {
        setCompanies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <>
      <AdminNavbar />
      <main className="flex flex-col items-center justify-center gap-12 p-8">
        <input
          type="text"
          className="mt-24 w-1/2 rounded-lg bg-gray-300 px-4 py-2 outline-none drop-shadow-sm"
          placeholder="🔎 Pesquisar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {search !== ''
            ? companies.map(
                (company) =>
                  company.name.toLowerCase().includes(search.toLowerCase()) && (
                    <Card
                      key={company.id}
                      company={company}
                      openModal={setIsModalOpen}
                      setState={setCompany}
                    />
                  )
              )
            : companies.map((company) => (
                <Card
                  key={company.id}
                  company={company}
                  openModal={setIsModalOpen}
                  setState={setCompany}
                />
              ))}
        </div>
        {isModalOpen && <Popup company={company} disposeModal={setIsModalOpen} />}
      </main>
    </>
  )
}
