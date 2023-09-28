import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'

import Admin from './admin/page'
import Companies from './companies/page'
import Company from './company/page'
import Forms from './forms/page'
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
          <Route path="/forms" element={<Forms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}
