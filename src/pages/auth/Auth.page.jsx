import SignInForm from "components/forms/auth/sign-in/SignInForm.component"
import SignUpForm from "components/forms/auth/sign-up/SignUpForm.component"
import { AuthenticationContainer } from "./auth-page.styles.jsx"

function Auth() {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Auth
