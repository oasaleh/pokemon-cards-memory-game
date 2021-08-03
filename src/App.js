import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Components/Main';

function App() {
  return (
    <div className='window'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
