import React, { useState } from 'react'
import { app } from '../auth/Firebase' 
import { Link } from 'react-router-dom'
import { getAuth,signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

const SignIn = () => {
    const [obj,setObj] = useState({
         email:"",
         password:""
    })  
    const handleSignIn = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, obj.email, obj.password).then(()=>console.log("SignIn......"))
        setObj({
            email: "",
            password: ""
        })
        // alert("Sign in successful!");
    }
  return (
    <>
    <h1>Sign In</h1>
    <form onSubmit={handleSignIn}>  
      <div className="form-floating mb-3">
      <input
        type="email"
        className="form-control"
        // id="floatingInput"
        placeholder="name@example.com"
        value={obj.email}
        onChange={(e)=>setObj({...obj,email:e.target.value})}
        />
      <label htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input
        type="password"
        className="form-control"
        // id="floatingPassword"
        placeholder="Password"
        value={obj.password}
        onChange={(e)=>setObj({...obj,password:e.target.value})}
        
      />
      <label htmlFor="floatingPassword">Password</label>

      {/* <button type='submit'>Submit</button> */} 
        <br />
         <Link type="submit" className="btn btn-primary btn-lg" to={"/show"}>SignIn</Link>
    </div>
    </form>
    </>
  )
}

export default SignIn
