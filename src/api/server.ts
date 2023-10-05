import axios from 'axios'

const baseURL: string = import.meta.env.VITE_STAGE
  ? import.meta.env.VITE_STAGE === 'TEST'
    ? 'http://localhost:3001'
    : import.meta.env.VITE_STAGE === 'DEV'
    ? 'https://diq-mss-companies.vercel.app'
    : 'http://localhost:3001'
  : 'http://localhost:3001'

const api = axios.create({
  baseURL: baseURL
})

export default api
