import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

function SignIn() {
  const handleLogInWIthGoogle = async () => {
    const res = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(res.user)
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={handleLogInWIthGoogle}>Sign in with Google</button>
    </div>
  )
}

export default SignIn
