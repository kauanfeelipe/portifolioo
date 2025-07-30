import React from 'react';


const SkillBar = ({ skill, percentage }) => (
  <div className="skill-bar">
    <label>{skill}</label>
    <div className="cs-progress-bar">
      <div className="bars" style={{ width: `${percentage}%` }}></div>
    </div>
  </div>
);

function Formation() {
  return (
    <section id="formacao" className="formation-section">
      <h2 className="section-title" style={{color: 'var(--bg)', WebkitTextStrokeColor: 'var(--text-3)', marginTop: '-45px', marginBottom: '20px'}}>Formação</h2>
      
      <div className="formation-grid">
        <div className="formation-card">
          <h3>Bacharelado</h3>
          <p><strong>Ciência da Computação</strong> - UNIFRAN</p>
          <p className="time">Cursando 2024 - 2027</p>
        </div>
        <div className="formation-card">
          <h3>Curso Online</h3>
          <p><strong>ReactJS / Tailwind CSS</strong> - Udemy</p>
          <p className="time">Cursando - 2025</p>
        </div>
        <div className="formation-card">
          <h3>Curso Online</h3>
          <p><strong>Python do zero ao Hacking</strong> - Ackerdemy</p>
          <p className="time">Cursando 2025</p>
        </div>
                <div className="formation-card">
          <h3>Curso Online</h3>
          <p><strong>Python 3 - Mundo 2</strong> - Curso em video</p>
          <p className="time">Concluído - 2024</p>
        </div>
                <div className="formation-card">
          <h3>Curso Online</h3>
          <p><strong>Python 3 - Mundo 1</strong> - Curso em Video</p>
          <p className="time">Concluído - 2024</p>
        </div>
                <div className="formation-card">
          <h3>Curso Técnico</h3>
          <p><strong>Informática para Internet</strong> - ETEC</p>
          <p className="time">Concluído - 2018</p>
        </div>
      </div>

      <div className="skills-container">
        <div className="skills-card">
          <h3>Hard Skills</h3>
          <div className="hard-skills-grid">
            <SkillBar skill="Python" percentage={85} />
            <SkillBar skill="Java" percentage={85} />
            <SkillBar skill="JavaScript" percentage={45} />
            <SkillBar skill="HTML & CSS" percentage={95} />
            <SkillBar skill="MySQL" percentage={85} />
            <SkillBar skill="Git" percentage={85} />
            <SkillBar skill="Flask" percentage={50} />
            <SkillBar skill="ReactJS/Tailwind" percentage={35} />
          </div>
        </div>

        <div className="skills-card">
          <h3>Soft Skills</h3>
          <ul>
            <li>Trabalho em Equipe</li>
            <li>Resolução de Problemas</li>
            <li>Criatividade</li>
            <li>Comunicação</li>
            <li>Agilidade de Aprendizado</li>
            <li>Capacidade de adaptação</li>
            <li>Atendimento ao Cliente</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Formation;