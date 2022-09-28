import React, { useState } from 'react'
import './Style.scss'
function SingUp() {

  const [isEmail, setIsEmail] = useState("")
    const [emailERR, setEmailERR] = useState('')

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [firstNameErr, setFirstNameErr] = useState('')
    const [lastNameErr, setLastNameErr] = useState('')

    const [isPassword,setIsPassword]=useState('')
    const [passwordERR,setIsPasswordERR]=useState('')

    const [confirm, setConfirm]=useState('')
    const [confirmERR,setConfirmERR]=useState('')
    

    function isEmailError(val, ) {
      let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regEmail.test(val)) {
          return setEmailERR('Invalid Email')

      } else { setEmailERR('') }
  }
  function isNameERR(text) {
      if (text === '') {
          return setFirstNameErr("What's your name?")
      }
      else { setFirstNameErr('') }
  }
  function ifLastNameErr(text) {
      if (text === '') {
          return setLastNameErr("What's your name?")
      } 
      else { setLastNameErr('') }
  }


  function isPassERR(pas){
      const mediumRegex =  new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
      if(!mediumRegex.test(pas)){
          return( setIsPasswordERR("Create password please"))
      }else{setIsPasswordERR('')}
  }

function isConfirmERR(vaal){
 
  if(vaal != isPassword){
   return   setConfirmERR("Repeat password")
  }else{setConfirmERR('okay')}
}


let objj={
  firstName:firstName,
  lastName:lastName,
  isEmail:isEmail,
  isPassword:isPassword,
  confirm:confirm,
}

  
let ff=()=>{
  
  localStorage.setItem("Data", JSON.stringify([objj]))
}





const f=(e) => {
  e.preventDefault()
  isEmailError(isEmail);
  isNameERR(firstName)
  ifLastNameErr(lastName)
  isPassERR(isPassword)
  isConfirmERR(confirm)
  ff()
}

  return (
    <section className='section-one'>
      <div className='forma'>
        <form className='singup-form' onSubmit={f}>
            <input className='singup-inp' type="text"  placeholder='First Name' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            <span className='sing-span'>{firstNameErr}</span>
            <input className='singup-inp' type="text"  placeholder='Last Name' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <span className='sing-span'>{lastNameErr}</span>
            <input className='singup-inp' type="email"  placeholder='Email'  onChange={(e) => setIsEmail(e.target.value)} value={isEmail}/>
            <span className='sing-span'>{emailERR}</span>
            <input className='singup-inp' type="password" placeholder='Password' value={isPassword} onChange={(e)=>setIsPassword(e.target.value)}/>
            <span className='sing-span'> {passwordERR}</span>
            <input className='singup-inp' type="password" placeholder='Confirm Password'  value={confirm} onChange={(e)=>setConfirm(e.target.value)}/>
            <span className='sing-span'> {confirmERR}</span>
            <button  className='btn' type='submit'>Sing Up</button>
        </form>
        </div>
    </section>
  )
}

export default SingUp