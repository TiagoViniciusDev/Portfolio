import Layout from './components/Layout/Layout'
import AllProjectsPage from './components/AllProjectsPage/AllProjectsPage'
import ErrorPage from './components/ErrorPage/ErrorPage'

import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    window.scroll(0, 0)
  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}/>
          <Route path='/projetos' element={<AllProjectsPage />}/>
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
