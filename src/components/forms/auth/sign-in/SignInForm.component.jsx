import { useState } from "react"
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../../../utils/firebase/firebase.utils"
import { Button, FormInput } from "../../../theme"
import "./sign-up-form.styles.scss"

const defaultFormData = {
  email: "",
  password: "",
}

function SignInForm() {
  const [formData, setFormData] = useState(defaultFormData)
  const { email, password } = formData

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
    } catch (error) {
      console.log("error", error)
    }
  }

  const handleSignWIthGoogle = async () => {
    const res = await signInWithGooglePopup()
    await createUserDocumentFromAuth(res.user)
  }

  return (
    <div className='sign-up-container'>
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
        <Button type='submit'>Sign In</Button>
        <Button buttonType='google' onClick={handleSignWIthGoogle}>
          Sign In With Google
        </Button>
      </form>
    </div>
  )
}

export default SignInForm