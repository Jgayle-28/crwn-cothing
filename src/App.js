import { Routes, Route } from "react-router-dom"
// Pages
import Home from "./pages/home/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  )
}

export default App
