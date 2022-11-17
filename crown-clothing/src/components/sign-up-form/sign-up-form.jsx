import { useState } from "react";
import { createAuthUserWithPassAndEmail } from "../../utils/firebase/firebase.utils";

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

  const handleSubmit = async (event) => {
    event.preventDefault();
  };
  return (
    <div className="sign-up">
      <h3>Sign Up with Email and Password</h3>
      <form onSubmit={handleSubmit}>
        <label>Display Name</label>
        <input
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={handleChange}
        />

        <label>Email</label>
        <input
          type="email"
          required
          name="email"
          value={email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          required
          name="password"
          value={password}
          onChange={handleChange}
        />

        <label>Confirm Password</label>
        <input
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
