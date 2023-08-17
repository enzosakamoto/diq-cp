import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from '../components/Navbar'

import Api from './api_usage/page'
import Home from './home/page'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api" element={<Api />} />
        </Routes>
      </Router>
    </>
  )
}
