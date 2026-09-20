import { useState } from 'react';

import './App.css';

import technologies from './data/technologies.json';

import logo from './assets/logo-text.png';
import heroImage from './assets/banner-stack.png';

import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiOpenjdk,
} from 'react-icons/si';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Technology Icon Map
const iconMap = {
  React: SiReact,
  'Vue.js': SiVuedotjs,
  Svelte: SiSvelte,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Java: SiOpenjdk,
  'Tailwind CSS': SiTailwindcss,
  Docker: SiDocker,
};

// Individual Technology Colors
const iconColorMap = {
  React: '#61DAFB',
  'Vue.js': '#42B883',
  Svelte: '#FF3E00',
  'Next.js': '#000000',
  'Node.js': '#339933',
  'Express.js': '#000000',
  PostgreSQL: '#4169E1',
  Redis: '#DC382D',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  Java: '#EA2D2E',
  'Tailwind CSS': '#06B6D4',
  Docker: '#2496ED',
};

function App() {
  const [stack, setStack] = useState([]);

  // Add Technology
  const addToStack = technology => {
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} already added!`);
      return;
    }

    setStack(previousStack => [...previousStack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove One Technology
  const removeFromStack = id => {
    const removedTechnology = stack.find(item => item.id === id);

    setStack(previousStack => previousStack.filter(item => item.id !== id));

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed!`);
    }
  };

  // Remove All Technologies
  const removeAll = () => {
    if (stack.length === 0) {
      toast.info('Your stack is already empty!');
      return;
    }

    setStack([]);

    toast.info('All technologies removed!');
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Dev Stack" className="logo-image" />
        </div>

        <div className="nav-menu">
          <a href="#" className="active">
            Home
          </a>

          <a href="#technologies">Technologies</a>

          <a href="#projects">Projects</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="nav-Buttons">
          <button className="sign-in">Sign In</button>

          <button className="sign-Up">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small-title">BUILD YOUR PERFECT</p>

          <h1>
            Developer
            <br />
            <span>Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options, customize,
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="hero-buttons">
            <a href="#technologies" className="explore-btn">
              Explore Technologies
            </a>

            <a href="#about" className="learn-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            className="hero-image"
            src={heroImage}
            alt="Developer stack illustration"
          />
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="technologies">
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Add any technologies you like — each one can be added only once.
          </p>
        </div>

        <div className="technology-layout">
          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map(technology => {
              const Icon = iconMap[technology.name];

              const isAdded = stack.some(item => item.id === technology.id);

              const iconColor = iconColorMap[technology.name] || '#64748b';

              return (
                <div
                  className={`technology-card ${
                    isAdded ? 'selected-card' : ''
                  }`}
                  key={technology.id}
                >
                  <div className="card-top">
                    <div
                      className="technology-icon"
                      style={{
                        color: iconColor,
                      }}
                    >
                      {Icon ? <Icon /> : technology.icon}
                    </div>

                    <span className="technology-badge">{technology.badge}</span>
                  </div>

                  <h3>{technology.name}</h3>

                  <p className="technology-description">
                    {technology.description}
                  </p>

                  <div className="technology-info">
                    <span className="category">{technology.category}</span>

                    <span className="difficulty">{technology.difficulty}</span>

                    <span className="rating">⭐ {technology.rating}</span>
                  </div>

                  <button
                    className={`add-btn ${isAdded ? 'added' : ''}`}
                    onClick={() => addToStack(technology)}
                    disabled={isAdded}
                  >
                    {isAdded ? '✓ Added to Stack' : '+ Add to Stack'}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Your Stack */}
          <div className="your-stack">
            <h3>Your Stack</h3>

            <p className="stack-count">
              {stack.length}{' '}
              {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            {stack.length === 0 ? (
              <div className="empty-stack">
                <p>Your stack is empty.</p>

                <small>Add technologies to build your stack.</small>
              </div>
            ) : (
              <div className="selected-tech-list">
                {stack.map(technology => {
                  const Icon = iconMap[technology.name];

                  const iconColor = iconColorMap[technology.name] || '#64748b';

                  return (
                    <div className="selected-tech" key={technology.id}>
                      <div
                        className="selected-icon"
                        style={{
                          color: iconColor,
                        }}
                      >
                        {Icon ? <Icon /> : technology.icon}
                      </div>

                      <div className="selected-tech-info">
                        <strong>{technology.name}</strong>

                        <small>{technology.category}</small>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromStack(technology.id)}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            <button className="remove-all" onClick={removeAll}>
              Remove All
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div id="about" className="footer-brand">
            <img src={logo} alt="Dev Stack" className="footer-logo" />

            <p>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className="social-links">
              <a href="#">GitHub</a>
              <a href="#">Twitter</a>
              <a href="#">LinkedIn</a>
            </div>
          </div>

          <div className="footer-column">
            <h4>PRODUCT</h4>

            <a href="#">Home</a>
            <a href="#technologies">Technologies</a>
            <a href="#projects">Projects</a>
          </div>

          <div id="contact" className="footer-column">
            <h4>COMPANY</h4>

            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-column">
            <h4>LEGAL</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
