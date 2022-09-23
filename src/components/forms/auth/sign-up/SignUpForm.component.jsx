import { useState, useContext } from "react"
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../../utils/firebase/firebase.utils"
import { Button, FormInput } from "../../../theme"
import { AuthContext } from "../../../../context/auth/Auth.context"
import "../auth-form.styles.scss"

const defaultFormData = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

function SignUpForm() {
  const [formData, setFormData] = useState(defaultFormData)
  const { displayName, email, password, confirmPassword } = formData

  const { setCurrentUser } = useContext(AuthContext)

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
        await createUserDocumentFromAuth(res.user)
        // Set user in context
        setCurrentUser(res.user)
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
      {/* <Button buttonType='google' onClick={handleLogInWIthGoogle}>
        Sign up with Google
      </Button> */}
    </div>
  )
}

export default SignUpForm
