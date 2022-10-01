import { useState } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "utils/firebase/firebase.utils"
import { Button, FormInput } from "components/theme"
import { AuthContainer } from "../auth-form.styles"
import { useDispatch } from "react-redux"
import { signUpStart } from "store/auth/auth.actions"

const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function SignUpForm() {
  const [formData, setFormData] = useState(defaultFormData)
  const { displayName, email, password, confirmPassword } = formData
  const dispatch = useDispatch()

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (password !== confirmPassword) return alert(`Passwords do not match`)

    try {
      dispatch(signUpStart(email, password, displayName))
      setFormData(defaultFormData)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <AuthContainer>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          onChange={handleChange}
          id='displayName'
          value={displayName}
          required
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          onChange={handleChange}
          id='confirmPassword'
          value={confirmPassword}
          required
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </AuthContainer>
  )
}

export default SignUpForm
