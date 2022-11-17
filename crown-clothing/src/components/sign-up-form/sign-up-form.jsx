const SignUp = () =>{
  return(
    <div className="sign-up">
      <h3>Sign Up with Email and Password</h3>
      <form>
        <label>Display Name</label>
        <input type="text" required />

        <label>Email</label>
        <input type="email" required />

        <label>Password</label>
        <input type="password" required />

        <label>Confirm Password</label>
        <input type="password" required />
      </form>
    </div>
  )
}

export default SignUp;