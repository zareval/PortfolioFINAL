import { Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './screens/Home';
import AboutMe from './screens/AboutMe';
import Contact from './screens/Contact';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import React from 'react';

function App() {
  return (
    <main className='flex flex-row w-screen h-screen bg-color-primario font-roboto'>
      <Navbar />
      <section className='flex-1 grid grid-rows h-full w-full  '>
        
        <section className='fondoPortafolio'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sobre_mi' element={<AboutMe />} />
            <Route path='/Contactame' element={<Contact />} />
            <Route path='/Habilidades' element={<Skills />} />
            <Route path='/Mis_trabajos' element={<Projects />} />
          </Routes>
        </section>
        {/*<Footer/>*/}
      </section>
    </main>
  );
}

export default App;
