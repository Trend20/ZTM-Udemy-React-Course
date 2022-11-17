import { useState } from "react";
import { createAuthUserWithPassAndEmail, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import './sign-up-form.styles.scss';

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  // initialize state
  const [formFields, setFormFields] = useState(defaultFormFields);

  // destructure form fields
  const { displayName, email, password, confirmPassword } = formFields;

  // handle change function
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  // reset form fields
  const resetFormFields = () =>{
    setFormFields(defaultFormFields);
  }

  // handle submit 
  const handleSubmit = async (event) => {
    event.preventDefault();

    if(password !== confirmPassword){
      alert('password not matching!')
      return;
    }
    try {
      const {user} = await createAuthUserWithPassAndEmail(email, password)
      console.log(user)
      await createUserDocumentFromAuth(user, { displayName })
      resetFormFields();
    } catch (error) {
      if(error.code === 'auth/email-already-in-use'){
        alert('cannot create user, email already exist!');
      }
      console.log('user encountered error', error);
    }
  };
  
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign Up with Email and Password</span>
      <form onSubmit={handleSubmit}>
       
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <FormInput
        label="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <FormInput
        label="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <FormInput
        label="Confirm Password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
