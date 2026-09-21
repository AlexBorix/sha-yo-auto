import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Catalog from './components/Catalog';
import Footer from './components/Footer';

function App() {
  const [page, setPage] = useState('home');

  return (
    <>
      <Header setPage={setPage} />
      {page === 'home' ? <Home setPage={setPage} /> : <Catalog setPage={setPage} />}
      <Footer />
    </>
  );
}

export default App;
