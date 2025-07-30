// src/components/ProjectCard.jsx
import React from 'react';

function ProjectCard({ title, description, tags, img, repoLink, siteLink, viewIcon, codeIcon }) {
  return (
    <div className="project-card">
      <a href={siteLink || repoLink} target="_blank" rel="noopener noreferrer" className="project-image">
        <img src={img} alt={`Imagem do projeto ${title}`} />
      </a>
      
      <div className="project-info">
        <h3>{title}</h3>
        <p>{description}</p>
        
        <div className="project-tags">
          {tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>

        <div className="project-links">
          <a href={siteLink} target="_blank" rel="noopener noreferrer" className="cs-btn">
            <img src={viewIcon} alt="Ver site" className="cs-btn-icon" />
            Visualizar
          </a>
          <a href={repoLink} target="_blank" rel="noopener noreferrer" className="cs-btn">
            <img src={codeIcon} alt="Ver código" className="cs-btn-icon" />
            Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;