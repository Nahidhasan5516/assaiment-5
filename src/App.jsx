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

    // একই technology আবার add করা যাবে না
    if (alreadyAdded) {
      toast.warning(`${technology.name} is already added!`);
      return;
    }

    // নতুন technology stack-এ যোগ করা
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
    setStack([]);

    toast.info('All technologies removed!');
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Dev Stack logo" className="logo-image" />
        </div>

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

      {/* ================= HERO SECTION ================= */}

      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-small-title">BUILD YOUR PERFECT</p>

          <h1>
            Developer
            <br />
            <span>Stack</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options. Compare
            different technologies and build the perfect stack for your next
            project.
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
            src={heroImage}
            alt="Developer stack illustration"
            className="hero-image"
          />
        </div>
      </section>

      {/* ================= TECHNOLOGIES SECTION ================= */}

      <section id="technologies" className="technologies">
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>
            Add any technologies you like. Each technology can be added only
            once.
          </p>
        </div>

        <div className="technology-layout">
          {/* Technology Cards */}

          <div className="technology-grid">
            {technologies.map(technology => {
              // Check করা হচ্ছে technology already added কি না
              const isAdded = stack.some(item => item.id === technology.id);

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
                        color: technology.color || '#64748b',
                      }}
                    >
                      {technology.icon}
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

          {/* ================= YOUR STACK ================= */}

          <div className="your-stack">
            <h3>Your Stack</h3>

            <p className="stack-count">
              {stack.length}{' '}
              {stack.length === 1 ? 'Technology' : 'Technologies'} Selected
            </p>

            {/* Stack empty থাকলে এই message দেখা যাবে */}

            {stack.length === 0 ? (
              <div className="empty-stack">
                <p>Your stack is empty.</p>

                <small>Add technologies to build your stack.</small>
              </div>
            ) : (
              <div className="selected-tech-list">
                {stack.map(technology => (
                  <div className="selected-tech" key={technology.id}>
                    <div
                      className="selected-icon"
                      style={{
                        color: technology.color || '#64748b',
                      }}
                    >
                      {technology.icon}
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
                ))}
              </div>
            )}

            {/* Stack-এ technology থাকলেই Remove All দেখা যাবে */}

            {stack.length > 0 && (
              <button className="remove-all" onClick={removeAll}>
                Remove All
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">
        <div className="footer-content">
          {/* Footer Brand */}

          <div id="about" className="footer-brand">
            <img src={logo} alt="Dev Stack logo" className="footer-logo" />

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

          {/* Product Links */}

          <div className="footer-column">
            <h4>PRODUCT</h4>

            <a href="#home">Home</a>

            <a href="#technologies">Technologies</a>

            <a href="#projects">Projects</a>
          </div>

          {/* Company Links */}

          <div id="contact" className="footer-column">
            <h4>COMPANY</h4>

            <a href="#about">About</a>

            <a href="#contact">Contact</a>

            <a href="#">Careers</a>
          </div>

          {/* Legal Links */}

          <div className="footer-column">
            <h4>LEGAL</h4>

            <a href="#">Privacy Policy</a>

            <a href="#">Terms of Service</a>
          </div>
        </div>

        {/* Footer Bottom */}

        <div className="footer-bottom">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div>
            <a href="#">Privacy</a>

            <a href="#">Terms</a>
          </div>
        </div>
      </footer>

      {/* Toast Message */}

      <ToastContainer position="top-right" autoClose={2000} theme="light" />
    </>
  );
}

export default App;
