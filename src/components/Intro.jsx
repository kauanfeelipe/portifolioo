import React from 'react';
import profileImage from '/minha-foto.png';

function Intro() {
  return (
    <div className="intro-container"> 
      <section className="intro-section" id="home">

        
        <div className="intro-left-col">
          <div className="image-frame">
            <div className="image-frame-titlebar">PLAYER_AVATAR</div>
            <img src={profileImage} alt="Foto de Kauan Felipe" className="intro-image" />
          </div>
          <div className="intro-buttons">
            <a href="/portifolioo/curri_kauanzera.pdf" target="_blank" rel="noopener noreferrer" className="cs-btn">Currículo</a>
            <a href="https://github.com/kauanfeelipe" target="_blank" rel="noopener noreferrer" className="cs-btn">GitHub</a>
            <a href="https://www.linkedin.com/in/kauanfeelipe/" target="_blank" rel="noopener noreferrer" className="cs-btn">LinkedIn</a>
          </div>
        </div>
        
      
        <div className="intro-text">
          <h2>Desenvolvedor em Formação</h2>
          <p>
            Entusiasmado por transformar ideias em soluções reais, unindo criatividade e habilidades técnicas para desenvolver projetos inovadores. Atualmente curso Ciência da Computação na UNIFRAN e estou sempre em busca de novos desafios que me permitam evoluir profissionalmente e expandir meus conhecimentos. Tenho experiência com as principais tecnologias da programação incluindo Python, Java, JavaScript, MySQL, HTML e CSS.
          </p>
        </div>
        
      </section>
    </div>
  );
}

export default Intro;