import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';

import { ToastContainer } from 'react-toastify';


import DeletarCategoria from './components/categorias/deletarCategoria/DeletarCategoria';
import FormularioCategoria from './components/categorias/formularioCategoria/FormularioCategoria';
import ListarCategorias from './components/categorias/listarCategorias/ListarCategorias';
import Contact from './pages/contact/Contact';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/suaFarma/" element={<Home />} />
            <Route path="/suaFarma/home" element={<Home />} />
            <Route path="/suaFarma/contact" element={<Contact />} />
            <Route path="/suaFarma/categorias" element={<ListarCategorias />} />
            <Route path="/suaFarma/cadastroCategoria" element={<FormularioCategoria />} />
            <Route
              path="/suaFarma/editarCategoria/:id"
              element={<FormularioCategoria />}
            />
            <Route path="/suaFarma/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;