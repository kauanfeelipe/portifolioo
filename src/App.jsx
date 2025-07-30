import React from 'react';
import Header from './components/Header';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Formation from './components/Formation';
import Footer from './components/Footer';

import viewIcon from '/icons/eye-regular.svg'; 
import codeIcon from '/icons/code-solid.svg';

function App() {
  return (
    <>
      <Header />
      <main>
        <Intro />
        <Projects viewIcon={viewIcon} codeIcon={codeIcon} />
        <Formation />
      </main>
      <Footer />
    </>
  );
}

export default App;