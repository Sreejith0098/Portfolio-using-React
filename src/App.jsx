import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Resume from './Pages/Resume'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='*' element={<NotFound/>} />
      <Route path='/resume' element={<Resume/>}></Route>
    </Routes>
    </>
  )
}

export default App
