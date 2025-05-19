import React, { cache, useState } from 'react'
import { app } from '../auth/Firebase'
// import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'

const auth = getAuth(app)

const ResetPassword = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("")

  const handleResetPassword = (e) => {
   e.preventDefault();
    try {
      sendPasswordResetEmail(auth,email).then(() => console.log("emailsended......"))

      setEmail("")

      navigate("/signin")
    }catch{
        console.error("SignIn failed:", error.message);
      alert("Invalid email");
    }

        // alert("Sign in successful!");
    }
  return (
    <>
      <h1>ResetPassword</h1>
      <form onSubmit={handleResetPassword}>
         <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            // id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

          {/* <button type='submit'>Submit</button> */}
          <br />
          <button type="submit" onClick={handleResetPassword} className="btn btn-primary btn-lg">ResetPassword</button>
          <br /><br />
          {/* <p>don't have account  Create New account br <Link to={"/"}>SignUp</Link></p> */}
         
          {/* <Link  to={'/show'}></Link> */}
      </form>
    </>
  )
}

export default ResetPassword
