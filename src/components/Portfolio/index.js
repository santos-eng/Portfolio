import React, { useState, useEffect } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import portfolioData from '../../data/portfolio.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faCode, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import './index.scss';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const portfolioItems = portfolioData.portfolio;

  const filteredItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => {
        if (filter === 'c++') return item.tools.includes('C++');
        if (filter === 'networking') return item.tag.toLowerCase().includes('networking');
        if (filter === 'graphics') return item.tag.toLowerCase().includes('graphics');
        if (filter === 'apps') return item.tag.toLowerCase().includes('desktop');
        return true;
      });

  return (
    <>
      <div className="container portfolio-page">
        <div className="portfolio-header">
          <h1 className="page-title">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <p className="page-subtitle">
            A showcase of my recent work in systems programming, graphics engines, algorithms, and software design.
          </p>

          <div className="filter-bar">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              <FontAwesomeIcon icon={faLayerGroup} className="filter-icon" />
              All Projects ({portfolioItems.length})
            </button>
            <button
              className={`filter-btn ${filter === 'c++' ? 'active' : ''}`}
              onClick={() => setFilter('c++')}
            >
              <FontAwesomeIcon icon={faCode} className="filter-icon" />
              C++ & Systems
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredItems.map((port, idx) => (
            <article
              className="project-card"
              key={port.id || idx}
              style={{ animationDelay: `${0.2 + idx * 0.15}s` }}
            >
              <div className="card-media">
                <img
                  src={process.env.PUBLIC_URL + port.cover}
                  className="project-image"
                  alt={port.title}
                  loading="lazy"
                />
                <div className="media-overlay" />
                <span className="category-badge">{port.tag}</span>
              </div>

              <div className="card-body">
                <div className="card-header">
                  <h2 className="project-title">{port.title}</h2>
                </div>

                <p className="project-description">{port.description}</p>

                <div className="tech-stack">
                  {port.tools.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="card-actions">
                  <a
                    href={port.url}
                    target="_blank"
                    rel="noreferrer"
                    className="action-btn primary-btn"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    <span>Source Code</span>
                  </a>
                  {port.demoUrl && (
                    <a
                      href={port.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="action-btn secondary-btn"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Portfolio;