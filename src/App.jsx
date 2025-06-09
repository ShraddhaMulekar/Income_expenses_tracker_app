// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/jsx/Navbar'
import Home from './components/jsx/Home'
import IncomeForm from './components/jsx/IncomeForm'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add-income-form' element={<IncomeForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
