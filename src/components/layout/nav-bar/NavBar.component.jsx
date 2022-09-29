import { Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from "assets/crown.svg"
import { useSelector } from "react-redux"
import { signOutUser } from "utils/firebase/firebase.utils"
import CartDropdown from "components/shop/cart-dropdown/CartDropdown.component"
import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./nav-bar.styles.jsx"

function NavBar() {
  const { currentUser } = useSelector((state) => state.auth)

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
            <NavLink as='span' onClick={signOutUser}>
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
