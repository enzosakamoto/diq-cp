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
  const [companies, setCompanies] = useState<Company[]>([])
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [companyId, setCompanyId] = useState<string>('')
  const { token } = useSelector(useLogin)
  const navigate = useNavigate()

  useEffect(() => {
    if (companyId) {
      setIsModalOpen(true)
    } else {
      setIsModalOpen(false)
    }
  }, [companyId])

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

    axios
      .get('http://localhost:3001/companies')
      .then((res) => {
        console.log(res.data)
        setCompanies(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [navigate, token])
  return (
    <>
      <AdminNavbar />
      <main className="flex items-center justify-center p-8">
        <div className="mt-24 grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {companies.map((company) => (
            <Card key={company.id} company={company} setState={setCompanyId} />
          ))}
        </div>
        {isModalOpen && <Popup id={companyId} />}
      </main>
    </>
  )
}
