import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from "assets/crown.svg"
import { AuthContext } from "context/auth/Auth.context"
import { signOutUser } from "utils/firebase/firebase.utils"
import "./nav-bar.styles.scss"
import CartDropdown from "components/shop/cart-dropdown/CartDropdown.component"

function NavBar() {
  const { currentUser } = useContext(AuthContext)

  return (
    <>
      <nav className='navigation'>
        <Link to='/' className='logo-container'>
          <CrownLogo className='logo' />
        </Link>

        <div className='nav-links-container'>
          <Link to='/shop' className='nav-link'>
            SHOP
          </Link>
          <Link to='/contact' className='nav-link'>
            CONTACT
          </Link>
          {currentUser ? (
            <span onClick={signOutUser} className='nav-link'>
              SIGN OUT
            </span>
          ) : (
            <Link to='/sign-in' className='nav-link'>
              SIGN IN
            </Link>
          )}
          <CartDropdown />
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar
