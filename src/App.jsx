import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Gallery from './pages/Gallery'

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/" 
              element={<Home/>} 
            />
            <Route
              path="/gallery" 
              element={<Gallery/>} 
            />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>

    </>
  )
}

export default App
