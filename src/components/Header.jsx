import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Header() {
  return (
    <header>
      <div className="header-title">
        <TypeAnimation
          sequence={[
            '< Kauan Felipe />',
            3000,
            '< Desenvolvedor />',
            3000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>

      <div className="nav-container">
        <div className="character-icons">
          <img src="/portifolioo/img/tr-icon.png" alt="Ícone Terrorista" />
          <img src="/portifolioo/img/ct-icon.png" alt="Ícone Contra-Terrorista" />
        </div>
        <nav>
          <ul className="header-menu">
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#formacao">Formação</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;