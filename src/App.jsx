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
} from 'react-icons/si';

const technologyIcons = {
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
  'Tailwind CSS': SiTailwindcss,
  Docker: SiDocker,
};

const technologyColors = {
  React: '#61DAFB',
  'Vue.js': '#42B883',
  Svelte: '#FF3E00',
  'Next.js': '#111827',
  'Node.js': '#68A063',
  'Express.js': '#111827',
  PostgreSQL: '#336791',
  Redis: '#DC382D',
  JavaScript: '#F7DF1E',
  TypeScript: '#3178C6',
  'Tailwind CSS': '#06B6D4',
  Docker: '#2496ED',
};

function App() {
  const [stack, setStack] = useState([]);
  const [toast, setToast] = useState('');

  // Show toast message
  const showToast = message => {
    setToast(message);

    setTimeout(() => {
      setToast('');
    }, 2500);
  };

  // Add a technology to the stack
  const addToStack = technology => {
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      showToast(`${technology.name} is already in your stack.`);
      return;
    }

    setStack(previousStack => [...previousStack, technology]);
    showToast(`${technology.name} added to your stack.`);
  };

  // Remove one technology
  const removeFromStack = technologyId => {
    const removedTechnology = stack.find(item => item.id === technologyId);

    setStack(previousStack =>
      previousStack.filter(item => item.id !== technologyId)
    );

    if (removedTechnology) {
      showToast(`${removedTechnology.name} removed from your stack.`);
    }
  };

  // Remove all selected technologies
  const removeAll = () => {
    setStack([]);
    showToast('All technologies removed from your stack.');
  };

  // Check whether a technology is already selected
  const isSelected = technologyId => {
    return stack.some(item => item.id === technologyId);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <img src={logo} alt="Dev Stack Builder" className="logo-image" />
        </a>

        <div className="nav-menu">
          <a href="#home" className="active">
            Home
          </a>

          <a href="#technologies">Technologies</a>

          <a href="#projects">Projects</a>

          <a href="#about">About</a>

          <a href="#contact">Contact</a>
        </div>

        <div className="nav-buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-up">Sign Up</button>
        </div>
      </nav>

      {/* Toast Notification */}
      {toast && (
        <div className="toast">
          <span className="toast-icon">✓</span>
          <span>{toast}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="hero-small-title">BUILD YOUR PERFECT STACK</p>

          <h1>
            Create Your
            <span> Development Stack</span>
          </h1>

          <p className="hero-description">
            Explore modern technologies and build your own development stack
            according to your project needs.
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

        <div className="hero-image">
          <img src={heroImage} alt="Development stack" />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies" id="technologies">
        <div className="section-heading">
          <h2>
            Explore <span>Technologies</span>
          </h2>

          <p>Choose the technologies you want to use in your project.</p>
        </div>

        <div className="technology-layout">
          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map(technology => {
              const Icon = technologyIcons[technology.name];

              const iconColor = technologyColors[technology.name] || '#64748B';

              const selected = isSelected(technology.id);

              return (
                <article
                  className={`technology-card ${
                    selected ? 'selected-card' : ''
                  }`}
                  key={technology.id}
                >
                  <div className="card-top">
                    <div
                      className="technology-icon"
                      style={{ color: iconColor }}
                    >
                      {Icon ? <Icon /> : '◇'}
                    </div>

                    <span className="technology-badge">
                      {technology.category}
                    </span>
                  </div>

                  <h3>{technology.name}</h3>

                  <p className="technology-description">
                    {technology.description ||
                      'A useful technology for modern development projects.'}
                  </p>

                  <div className="technology-info">
                    {technology.difficulty && (
                      <span className="difficulty">
                        {technology.difficulty}
                      </span>
                    )}

                    {technology.rating && (
                      <span className="rating">⭐ {technology.rating}</span>
                    )}
                  </div>

                  <button
                    className={`add-btn ${selected ? 'added' : ''}`}
                    onClick={() => addToStack(technology)}
                    disabled={selected}
                  >
                    {selected ? '✓ Added to Stack' : 'Add to Stack'}
                  </button>
                </article>
              );
            })}
          </div>

          {/* Your Stack Sidebar */}
          <aside className="your-stack">
            <div className="stack-header">
              <h3>Your Stack</h3>

              <span className="stack-number">{stack.length}</span>
            </div>

            <p className="stack-count">
              {stack.length} Technology
              {stack.length !== 1 ? 'ies' : 'y'} Selected
            </p>

            {stack.length === 0 ? (
              <div className="empty-stack">
                <span className="empty-icon">＋</span>

                <p>Your stack is empty</p>

                <small>Add technologies from the list.</small>
              </div>
            ) : (
              <div className="selected-list">
                {stack.map(technology => {
                  const Icon = technologyIcons[technology.name];

                  const iconColor =
                    technologyColors[technology.name] || '#64748B';

                  return (
                    <div className="selected-tech" key={technology.id}>
                      <div
                        className="selected-icon"
                        style={{ color: iconColor }}
                      >
                        {Icon ? <Icon /> : '◇'}
                      </div>

                      <div className="selected-info">
                        <strong>{technology.name}</strong>

                        <small>{technology.category}</small>
                      </div>

                      <button
                        className="remove-btn"
                        onClick={() => removeFromStack(technology.id)}
                        aria-label={`Remove ${technology.name}`}
                      >
                        ×
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

            {stack.length > 0 && (
              <button className="remove-all" onClick={removeAll}>
                Remove All
              </button>
            )}
          </aside>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src={logo} alt="Dev Stack Builder" className="footer-logo" />
          </div>

          <div className="footer-column">
            <h4>Product</h4>

            <a href="#technologies">Technologies</a>

            <a href="#projects">Projects</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>
          </div>

          <div className="footer-column">
            <h4>Support</h4>

            <a href="#contact">Help Center</a>

            <a href="#contact">Feedback</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
