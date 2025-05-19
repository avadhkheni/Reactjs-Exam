import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../auth/Firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
// import SignUp from './SignUp'


const auth = getAuth(app)


const SignUp = () => {

  const [obj, setObj] = useState({
    email: "",
    password: ""
  })

  const handleSignUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, obj.email, obj.password).then(() => console.log("SignIn......"))
    setObj({
      email: "",
      password: ""
    })
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
          <Link type="submit" className="btn btn-success btn-lg" to={"/show"}>SignUp</Link>
        </div>
      </form>
    </>
  )
}

export default SignUp
