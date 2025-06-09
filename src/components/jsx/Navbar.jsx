import React from 'react'
import "../css/Navbar.css"
import { TfiMenuAlt } from "react-icons/tfi";
import { MdBarChart, MdCategory, MdOutlineAccountBalance, MdOutlinePayments, MdPieChart } from "react-icons/md";
import { FaArrowTrendUp, FaBullhorn } from "react-icons/fa6";
import { BiSolidBarChartAlt2 } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
  return (
    <div className='navbar_container'>
        <div className='navbar_img_container' onClick={()=>navigate("/")}>
            <img style={{width:"50px"}} src="./src/image/image.png" alt="logo" />
        </div>
        <div className='navbar_content'>
            <div className='navbar_opt'>
                <BiSolidBarChartAlt2 />
                <p>Summary</p>
            </div>
            <div className='navbar_opt'>
                <MdCategory />
                <p>Category</p>
            </div>
            <div className='navbar_opt'>
                <TfiMenuAlt />
                <p>Recent Transactions</p>
            </div>
            <div className='navbar_opt'>
                <MdOutlinePayments />
                <p>Payment Method</p>
            </div>
            <div className='navbar_opt'>
                <MdPieChart />
                <p>Category Chart</p>
            </div>
            <div className='navbar_opt'>
                <FaBullhorn />
                <p>Budget</p>
            </div>
            <div className='navbar_opt'>
                <FaArrowTrendUp />
                <p>Trend</p>
            </div>
            <div className='navbar_opt'>
                <IoIosNotifications />
                <p>Reminders</p>
            </div>
            <div className='navbar_opt'>
                <MdOutlineAccountBalance />
                <p>Account</p>
            </div>
            <div className='navbar_opt'>
                <MdBarChart />
                <p>Payment method chart</p>
            </div>
        </div>

    </div>
  )
}

export default Navbar