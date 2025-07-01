// import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/jsxPages/Navbar'
import Home from './components/jsxPages/Home'
import IncomeForm from './components/jsxPages/IncomeForm'
import Login from './components/jsxPages/Login'
import SignIn from './components/jsxPages/SignIn'
import Logout from './components/jsxPages/Logout'
import Summary from './components/jsxPages/Summary'
import CategoryPieChart from './components/jsxPages/CategoryPieChart'
import Category from './components/jsxPages/Category'
import Transaction from './components/jsxPages/Transaction'
import Payment from './components/jsxPages/Payment'
import Trend from './components/jsxPages/Trend'
import BudgetBalChart from './components/jsxPages/BudgetBalChart'
import PaymentMethod from './components/jsxPages/PaymentMethod'
import Transfer from './components/jsxPages/Transfer'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/category-chart' element={<CategoryPieChart />} />
        <Route path='/category' element={<Category />} />
        <Route path='/all-transaction' element={<Transaction />} />
        <Route path='/payment-method' element={<Payment />} />
        <Route path='/trend' element={<Trend />} />
        <Route path='/total-budget' element={<BudgetBalChart />} />
        <Route path='/payment-method-chart' element={<PaymentMethod />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/add-income-form' element={<IncomeForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
