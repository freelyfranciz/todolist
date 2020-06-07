import React from 'react';
import './App.css';
import './styles/style.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
