import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Routes, Route } from "react-router-dom"

import { checkUserSession } from "store/auth/auth.actions"
// Components
import NavBar from "./components/layout/nav-bar/NavBar.component"
// Pages
import Home from "./pages/home/Home.page"
import Shop from "./pages/shop/Shop.page"
import Contact from "./pages/contact/Contact.page"
import Auth from "./pages/auth/Auth.page"
import Checkout from "pages/checkout/Checkout.page"

function App() {
  const dispatch = useDispatch()
  // onAuthStateChanged from firebase allows us to only update when the 'auth' singleton has changed thus preventing unnecessary re renders
  // Which in return enhances performance and centralizes authentication actions "REGISTER & SIGN IN"
  useEffect(() => {
    dispatch(checkUserSession())
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='sign-in' element={<Auth />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
