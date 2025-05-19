import React, { cache, useState } from 'react'
import { app } from '../auth/Firebase'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth(app)

const SignIn = () => {
  const navigate = useNavigate();

  const [obj, setObj] = useState({
    email: "",
    password: ""
  })

  const handleSignIn = (e) => {
   e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, obj.email, obj.password).then(() => console.log("SignIn......"))

      setObj({
        email: "",
        password: ""
      })

      .navigate("/show")
    }catch{
        console.error("SignIn failed:", error.message);
      alert("Invalid email or password");
    }

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
          <button type="submit" onClick={handleSignIn} className="btn btn-primary btn-lg">SignIn</button>
          <p>Create New account <Link to={"/"}>SignUp</Link></p>
         
          {/* <Link  to={'/show'}></Link> */}
        </div>
      </form>
    </>
  )
}

export default SignIn
