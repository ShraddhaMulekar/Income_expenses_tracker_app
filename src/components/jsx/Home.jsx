import React from 'react'
import "../css/Home.css"
import { BiTransfer } from 'react-icons/bi'
import { HiOutlineMinusCircle } from 'react-icons/hi'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { TfiMenuAlt } from 'react-icons/tfi'

const Home = () => {
  return (
    <div className='home_container'>
        <div className='home_opt'>
            <IoMdAddCircleOutline />
            <h3>Add Income</h3>
        </div>
        <div className='home_opt'>
            <HiOutlineMinusCircle />
            <h3>Add Expenses</h3>
        </div>
        <div className='home_opt'>
            <BiTransfer />
            <h3>Transfer</h3>
        </div>
        <div className='home_opt'>
            <TfiMenuAlt />
            <h3>Transactions</h3>
        </div>
    </div>
  )
}

export default Home