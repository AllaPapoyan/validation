import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Singin.scss'
function SingIn() {
    const [login, setLogin] = useState("")
    const [parol, setParol] = useState("")
    const[err,setErr]=useState("")
    let users = JSON.parse(localStorage.getItem("Data") || "[]");

    const naviigator = useNavigate()
    return (


        <section className='section-two'>
            <div className='singin'>
                <form className='log-in'>
                <span className='err'>{err}</span>
                    <h2></h2>
                    <input className='login-inp'  type="email" onChange={(e) => setLogin(e.target.value)} />
                    <span></span>
                    <input className='login-inp' type="password" onChange={(e) => setParol(e.target.value)} />
                    <span></span>
                    <button className='login-btn' onClick={(e) => {
                            e.preventDefault()
                        if (users.filter(el => el.isEmail == login && el.isPassword == parol).length) {
                            naviigator('/')
                        } else {  setErr("User is not confirmed!" )}
                    }}>LOG IN</button>
                </form>
            </div>
        </section>
    )
}

export default SingIn