import React from 'react';
import Hero from './Hero';
import Introduction from './Introduction';
import Biography from './Biography';
import Vehicles from './Vehicles';
import Experience from './Experience';
import Services from './Services';
import Immersive from './Immersive';
import Contact from './Contact';

export default function Home({ setPage }) {
  return (
    <>
      <Hero />
      <Introduction />
      <Biography />
      <Vehicles setPage={setPage} />
      <Experience />
      <Services />
      <Immersive />
      <Contact />
    </>
  );
}
