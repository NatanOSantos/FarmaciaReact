import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Contact from './pages/contact/Contact';
import Footer from './components/footer/Footer'
import NavBar from './components/navbar/Navbar';
import Home from './pages/home/Home';

function App() {

  return (
    <>
        <BrowserRouter>
        <NavBar />
          <div className="min-h-[80vh]">
            <Routes>
                <Route path="/" element={<Contact />} />
                <Route path='/home' element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
