import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUp from "../../components/sign-up-form/sign-up-form";

const SignIn = () =>{

  const logGoogleUser =  async () =>{
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return(
    <div>
      <h1>This is the sign in page!</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <SignUp />
    </div>
  )
}

export default SignIn;