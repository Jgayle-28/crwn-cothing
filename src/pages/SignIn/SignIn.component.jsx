// import { getRedirectResult } from "firebase/auth"
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  // signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/forms/auth/SignUpForm.component"

function SignIn() {
  // Needed to catch the information from the redirect -> sign in with google redirect
  // useEffect(() => {
  //   handleLogInWithGoogleRedirect()
  // }, [])

  const handleLogInWIthGoogle = async () => {
    const res = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(res.user)
  }
  // const handleLogInWithGoogleRedirect = async () => {
  //   const response = await getRedirectResult(auth)
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user)
  //   }
  // }

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={handleLogInWIthGoogle}>Sign in with Google</button>

      <SignUpForm />
      {/* DEMO BUTTON FOR SIGN IN WITH GOOGLE REDIRECT */}
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with Google redirect
      </button> */}
    </div>
  )
}

export default SignIn
