
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import './App.scss'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { lazy, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import fallbackRender from './components/ErrorBoundary'

const Home = lazy(()=>import('./components/Home'))
const Projects = lazy(()=>import('./components/Pages/Projects'))
const ContactPage = lazy(()=>import('./components/Pages/ContactPage'))


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <ErrorBoundary fallbackRender={fallbackRender}>
      <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/projects' element = {<Projects />} />
        <Route path='/contact' element = {<ContactPage />} />
      </Routes>
      <Footer />
      </Suspense>
      </ErrorBoundary>
      </BrowserRouter>
    </>
  )
}

export default App
