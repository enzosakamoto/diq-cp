import axios from 'axios'

const baseURL: string =
  import.meta.env.VITE_STAGE === 'DEV' ? 'http://localhost:3001' : 'https://api.example.com'

const api = axios.create({
  baseURL: baseURL
})

export default api
