import { Link, Outlet } from "react-router-dom"
import { ReactComponent as CrownLogo } from "../../../assets/crown.svg"
import "./nav-bar.styles.scss"

function NavBar() {
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
          <Link to='/shop' className='nav-link'>
            CONTACT
          </Link>
          <Link to='/sign-in' className='nav-link'>
            SIGN IN
          </Link>
        </div>
      </nav>
      <Outlet />
    </>
  )
}

export default NavBar