import SignInForm from "../../components/forms/auth/sign-in/SignInForm.component"
import SignUpForm from "../../components/forms/auth/sign-up/SignUpForm.component"
import "./auth-page.styles.scss"

function Auth() {
  return (
    <div className='authentication-container'>
      <SignInForm />
      <SignUpForm />
    </div>
  )
}

export default Auth
