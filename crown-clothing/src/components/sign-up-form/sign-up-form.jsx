import { useState } from "react";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: ''
}

const SignUp = () =>{

  // initialize state
  const [formFields, setFormFields ] = useState(defaultFormFields);

  // destructure form fields
  const { displayName, email, password, confirmPassword } = formFields;


  // handle change function
  const handleChange = (e) =>{
    
  }
  return(
    <div className="sign-up">
      <h3>Sign Up with Email and Password</h3>
      <form>
        <label>Display Name</label>
        <input type="text" required name="displayName" value={displayName} />

        <label>Email</label>
        <input type="email" required name="email" value={email} />

        <label>Password</label>
        <input type="password" required name="password" value={password} />

        <label>Confirm Password</label>
        <input type="password" required name="confirmPassword" value={confirmPassword} />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUp;