// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomeView from './components/HomeView';
import CounterView from './components/CounterView';
import MapView from './components/MapView';
import WishListView from './components/WishListView';
import './styles/App.css';

function App() {
  useEffect(() => {
    // Agregar el enlace de la fuente a la etiqueta <head>
    const fontLink = document.createElement('link');
    fontLink.href = 'https://fonts.googleapis.com/css2?family=Lobster&display=swap';
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);
    
    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/contador" element={<CounterView />} />
            <Route path="/mapa" element={<MapView />} />
            <Route path="/deseos" element={<WishListView />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
