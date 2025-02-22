import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Home from './pages/home/Page.jsx'
import About from './pages/about/Page.jsx'
import Contact from './pages/contact/Page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
