import { Routes, Route } from "react-router-dom"
import NavBar from "./components/layout/nav-bar/NavBar.component"

// Pages
import Home from "./pages/home/Home.page"
import Shop from "./pages/shop/Shop.page"
import Contact from "./pages/contact/Contact.page"
import Auth from "./pages/auth/Auth.page"
import Checkout from "pages/checkout/Checkout.page"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='sign-in' element={<Auth />} />
          <Route path='checkout' element={<Checkout />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
