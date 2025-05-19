import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../auth/Firebase'
import { useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// import SignUp from './SignUp'


const auth = getAuth(app)


const SignUp = () => {
  const navigate = useNavigate()


  const [obj, setObj] = useState({
    email: "",
    password: ""
  })

  const handleSignUp = (e) => {
    e.preventDefault();
    try{
      createUserWithEmailAndPassword(auth, obj.email, obj.password).then(() => console.log("SignIn......"))
      setObj({
        email: "",
        password: ""
      })
      navigate("/show")
    }catch{
         console.error("SignUp failed:", error.message);
      // alert("Invalid email or password");
    }
    // alert("Sign in successful!");
  }

  return (
    <>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignUp}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            // id="floatingInput"
            placeholder="name@example.com"
            value={obj.email}
            onChange={(e) => setObj({ ...obj, email: e.target.value })}
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
            onChange={(e) => setObj({ ...obj, password: e.target.value })}

          />
          <label htmlFor="floatingPassword">Password</label>

          {/* <button type='submit'>Submit</button> */}
          <br />
          <Link type="submit" onClick={handleSignUp} className="btn btn-success btn-lg" >SignUp</Link>
          <p>already have an account  <Link to={"/signin"}>Signin</Link></p>
        </div>
      </form>
    </>
  )
}

export default SignUp
