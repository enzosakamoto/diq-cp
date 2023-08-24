import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { useLogin } from '../../redux/sliceLogin'

export default function Admin() {
  const { token } = useSelector(useLogin)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(token)
    if (token === 'teste') {
      navigate('/login')
    }
  }, [navigate, token])
  return (
    <>
      <h1>OIE</h1>
    </>
  )
}
