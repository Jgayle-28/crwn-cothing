import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from "assets/crown.svg"
import { useDispatch, useSelector } from "react-redux"
import CartDropdown from "components/shop/cart-dropdown/CartDropdown.component"
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./nav-bar.styles.jsx"
import { signOutStart } from "store/auth/auth.actions.js"

function NavBar() {
  const { currentUser } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const handleSignOutUser = () => {
    dispatch(signOutStart())
  }

  return (
    <>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className='logo' />
        </LogoContainer>

        <NavLinksContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          <NavLink to='/contact'>CONTACT</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={handleSignOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/sign-in'>SIGN IN</NavLink>
          )}
          <CartDropdown />
        </NavLinksContainer>
      </NavigationContainer>
      <Outlet />
    </>
  )
}

export default NavBar
