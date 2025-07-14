import React from 'react'
import backendUrl from '../../../config/backendUrl'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")

    const handleSubmit = async()=>{
        const res = await fetch(`${backendUrl}user/logout`, {
            method : "POST",
            headers :{
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            }
        })
        const data = await res.json()
        // console.log(data)
        alert(data.msg)
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <div>
        <button onClick={handleSubmit}>Log out!</button>
    </div>
  )
}

export default Logout