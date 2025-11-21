import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Apply from './components/Apply/Apply.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import { Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Academics from './components/Academics/Academics.jsx'
import Admissions from './components/Admissions/Admissions.jsx'
import Research from './components/Research/Research.jsx'
import International from './components/International/International.jsx'
import Campus from './components/Campus/Campus.jsx'
import News from './components/News/News.jsx'
import Signup from './components/Signup.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    

    <Route>
    <Route path='/' element={<Layout />}>
    <Route path='' element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='academics' element={<Academics />} />
    <Route path='admissions' element={<Admissions />} />
    <Route path='research' element={<Research />} />
    <Route path='international' element={<International />} />
    <Route path='campus' element={<Campus />} />
    <Route path='news' element={<News />} />
    </Route>

    <Route path='apply' element={<Apply />} />
    <Route path='signup' element={<Signup />} />

    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
