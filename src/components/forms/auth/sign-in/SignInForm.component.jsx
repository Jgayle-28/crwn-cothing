import { useState } from "react"
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "utils/firebase/firebase.utils"
import { Button, FormInput } from "components/theme"
import { BUTTON_TYPE_CLASSES } from "components/theme/button/Button.component"
import { AuthContainer } from "../auth-form.styles"
import { useDispatch } from "react-redux"
import { googleSignInStart } from "store/auth/auth.actions"

const defaultFormData = {
  email: "",
  password: "",
}

function SignInForm() {
  const [formData, setFormData] = useState(defaultFormData)
  const { email, password } = formData

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await signInAuthUserWithEmailAndPassword(email, password)
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleSignWIthGoogle = async () => {
    dispatch(googleSignInStart())
  }

  return (
    <AuthContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          onChange={handleChange}
          id='email'
          value={email}
          required
        />

        <FormInput
          label='Password'
          type='password'
          onChange={handleChange}
          id='password'
          value={password}
          required
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={handleSignWIthGoogle}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </AuthContainer>
  )
}

export default SignInForm
