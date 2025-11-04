import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apply from './components/Apply/Apply.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Academics from './components/Academics/Academics.jsx'
import Admissions from './components/Admissions/Admissions.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='apply' element={<Apply />} />
    <Route path='about' element={<About />} />
    <Route path='academics' element={<Academics />} />
    <Route path='admissions' element={<Admissions />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
