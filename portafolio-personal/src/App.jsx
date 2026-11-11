import { Route, Routes } from 'react-router-dom'
import { Home } from './components/Home.jsx'
import { Projects } from './components/Projects.jsx'
import { Contact } from './components/contact.jsx'
import { Navbar } from './components/Navbar.jsx'

export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  )
}
