import { useState } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils"
import Button from "../../theme/Button/Button.component"
import FormInput from "../../theme/FormInput/FormInput.component"
import "./sign-up-form.styles.scss"

const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function SignUpForm() {
  const [formData, setFormData] = useState(defaultFormData)
  const { displayName, email, password, confirmPassword } = formData

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
      const res = await createAuthUserWithEmailAndPassword(email, password)
      if (res) {
        // Add the users display name since it is not coming from Google
        res.user.displayName = displayName
        const userDocRef = await createUserDocumentFromAuth(res.user)
        setFormData(defaultFormData)
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className='sign-up-container'>
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
    </div>
  )
}

export default SignUpForm
