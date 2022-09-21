import { Routes, Route } from "react-router-dom"
import NavBar from "./components/layout/NavBar"
// Pages
import Home from "./pages/home"
import Shop from "./pages/shop"

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path='shop' element={<Shop />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
