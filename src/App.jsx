
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import ContactPage from './components/Pages/ContactPage'
import Projects from './components/Pages/Projects'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact element = {<Home />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/contact' element = {<ContactPage />} />
      </Routes>
      
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
