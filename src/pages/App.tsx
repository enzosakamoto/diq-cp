import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'

import Admin from './admin/page'
import Companies from './companies/page'
import Company from './company/page'
import Home from './home/page'
import Login from './login/page'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<Company />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
