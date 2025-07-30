// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const projectData = [
    {
      title: 'Study Terminal',
      description: 'Aplicação web com tema terminal, desenvolvida para aprendizado e utilidade na faculdade, permitindo a execução de codigos python e salvar arquivos.',
      tags: ['React', 'Tailwind', 'Firebase'],
      img: 'portifolioo/img/prj01.jpg',
      repoLink: 'https://github.com/kauanfeelipe/studyTerminal',
      siteLink: 'https://files-terminal.web.app/'
    },
    {
      title: 'Barbearia Agendamentos',
      description: 'Web-Site de agendamentos para uma barbearia, desenvolvido para aprendizado com Flask , Python, Templates Jinja2 HTML, CSS e banco de dados MYSQL.',
      tags: ['Python', 'Flask', 'MySQL'],
      img: 'portifolioo/img/prj02.jpg',
      repoLink: 'https://github.com/kauanfeelipe/barbearia',
      siteLink: 'https://github.com/kauanfeelipe/barbearia'
    },
    {
      title: 'Web-Site Portifólio 1.6',
      description: 'Portfólio desenvolvido com o tema do jogo Counter-Strike 1.6, utilizando React, JavaScript e CSS. O portfólio é responsivo e possui uma navegação intuitiva.',
      tags: ['React', 'JavaScript', 'CSS'],
      img: 'portifolioo/img/prj03.png',
      repoLink: 'https://github.com/kauanfeelipe/portifolioo',
      siteLink: 'https://kauanfeelipe.github.io/portifolioo/'
    },
    {
      title: 'Biblioteca Francesa',
      description: 'Web-site que simula uma Biblioteca, Desenvolvida na faculdade como atividade avaliativa no semestre. Nele pude fixar conhecimentos de JavaScript, HTML, e CSS.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      img: 'portifolioo/img/prj04.png',
      repoLink: 'https://github.com/kauanfeelipe/biblioteca_francesa',
      siteLink: 'https://github.com/kauanfeelipe/biblioteca_francesa/blob/main/README.md'
    },
    {
      title: 'Simulador de Vendas',
      description: 'Projeto criado com simulação de vendas para uma construtora em um projeto de faculdade. Nele pude fixar conhecimentos de JavaScript, HTML, e CSS.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      img: 'portifolioo/img/prj05.png',
      repoLink: 'https://github.com/kauanfeelipe/projeto-construtora',
      siteLink: 'https://github.com/kauanfeelipe/projeto-construtora/blob/master/README.md'
    },
    {
      title: 'Game Pedra/Papel/Tesoura',
      description: 'Desenvolvi um jogo de navegador que simula o jogo Pedra, Papel e Tesoura, onde o usuário pode jogar contra a máquina gerando uma jogada aleatória.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      img: 'portifolioo/img/prj06.png',
      repoLink: 'https://github.com/kauanfeelipe/gameJS-pedra-papel-tesoura',
      siteLink: 'https://game-js-pedra-papel-tesoura.vercel.app/'
    },
    {
      title: 'Calculadora Web',
      description: 'Calculadora web interativa com operações matemáticas básicas, interface intuitiva e responsiva.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      img: 'portifolioo/img/prj07.png',
      repoLink: 'https://github.com/kauanfeelipe/projeto-calculadora',
      siteLink: 'https://calculadora-omega-five.vercel.app/'
    },
    {
      title: 'Simulador de Dados',
      description: 'Jogo de navegador que simula rolar um dado, pude explorar a IA como material de aprendizado.',
      tags: ['JavaScript', 'HTML', 'CSS'],
      img: 'portifolioo/img/prj08.png',
      repoLink: 'https://github.com/kauanfeelipe/projeto-jogo-dados',
      siteLink: 'https://projeto-jogo-dados.vercel.app/'
    }
];

function Projects({ viewIcon, codeIcon }) {
  return (
    <section id="projetos">
      <h2 className="section-title" >Projetos</h2>

      <div className="project-list project-list-desktop">
        {projectData.map((proj) => (
          <ProjectCard 
            key={proj.title}
            {...proj} 
            viewIcon={viewIcon} 
            codeIcon={codeIcon}
          />
        ))}
      </div>
      
      <div className="project-carousel-mobile">
        <Swiper
          modules={[Pagination]}
          slidesPerView={'auto'}
          centeredSlides={true}
          spaceBetween={25}
          pagination={{ clickable: true }}
        >
          {projectData.map((proj) => (
            <SwiperSlide key={proj.title} style={{ width: '99%' }}> 
              <ProjectCard 
                {...proj} 
                viewIcon={viewIcon} 
                codeIcon={codeIcon}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;