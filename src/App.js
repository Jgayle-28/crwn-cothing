import { Routes, Route } from "react-router-dom"
import NavBar from "./components/layout/NavBar/NavBar.component"

// Pages
import Home from "./pages/home/Home.component"
import Shop from "./pages/shop/Shop.component"
import Contact from "./pages/contact/Contact.component"
import SignIn from "./pages/SignIn/SignIn.component"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
          <Route path='contact' element={<Contact />} />
          <Route path='sign-in' element={<SignIn />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
