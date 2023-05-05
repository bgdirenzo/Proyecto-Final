import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import ContactoPage from './pages/ContactoPage';
import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ClientesPage from './pages/ClientesPage';
import ServiciosPage from './pages/ServiciosPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />     
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes> 
      <Footer />  
    </div>
    </BrowserRouter>
  );
}

export default App;
