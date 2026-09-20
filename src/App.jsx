import { useState } from 'react';

import './App.css';

import technologies from './data/technologies.json';
import logo from './assets/logo-text.png';
import heroImage from './assets/banner-stack.png';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Selected technologies রাখার জন্য state
  const [stack, setStack] = useState([]);

  // Technology add করার function
  const addToStack = technology => {
    const alreadyAdded = stack.some(item => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} already added!`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // একটি technology remove করার function
  const removeFromStack = id => {
    const removedTechnology = stack.find(item => item.id === id);

    const updatedStack = stack.filter(item => item.id !== id);

    setStack(updatedStack);

    if (removedTechnology) {
      toast.info(`${removedTechnology.name} removed!`);
    }
  };

  // সব technology remove করার function
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

        <div className="hero-image">
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

          <p>Pick technologies to build your ideal stack.</p>
        </div>

        <div className="technology-layout">
          {/* Technology Cards */}
          <div className="technology-grid">
            {technologies.map(technology => {
              const isAdded = stack.some(item => item.id === technology.id);

              return (
                <div className="technology-card" key={technology.id}>
                  <div className="card-top">
                    <div className="technology-icon">{technology.icon}</div>

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

                  {/* Add Button */}
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

            {/* Empty State */}
            {stack.length === 0 ? (
              <div className="empty-stack">
                <p>Your stack is empty.</p>

                <small>Add technologies to build your stack.</small>
              </div>
            ) : (
              /* Selected Technologies */
              <div className="selected-tech-list">
                {stack.map(technology => (
                  <div className="selected-tech" key={technology.id}>
                    <div className="selected-icon">{technology.icon}</div>

                    <div>
                      <strong>{technology.name}</strong>

                      <small>{technology.category}</small>
                    </div>

                    {/* Remove Button */}
                    <button
                      className="remove-btn"
                      onClick={() => removeFromStack(technology.id)}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Remove All Button */}
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

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
