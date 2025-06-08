import React from 'react'
import { TfiMenuAlt } from "react-icons/tfi";
import { MdOutlinePayments, MdPieChart } from "react-icons/md";
import { FaArrowTrendUp, FaBullhorn } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <div>
            <img style={{width:"50px"}} src="./src/image/image.png" alt="logo" />
        </div>
        <div>
            <div>
                <TfiMenuAlt />
                <p>Recent Transactions</p>
            </div>
            <div>
                <MdOutlinePayments />
                <p>Payment Method</p>
            </div>
            <div>
                <MdPieChart />
                <p>Category Chart</p>
            </div>
            <div>
                <FaBullhorn />
                <p>Budget</p>
            </div>
            <div>
                <FaArrowTrendUp />
                <p>Trend</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar