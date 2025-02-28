import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import GitaPage from './pages/GitaPage';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <GitaPage />
      <Footer />
    </div>
  );
}

export default App;