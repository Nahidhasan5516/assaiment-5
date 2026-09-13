import './App.css';
import technologies from './data/technologies.json';
import logo from './assets/logo-text.png';
import heroImage from './assets/banner-stack.png';
function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Dev stack" className="logo-image" />
        </div>

        <div className="nav-menu">
          <a href="#" className="active">
            Home
          </a>
          <a href="#"> Technologies </a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <div className="nav-Buttons">
          <button className="sign-in">Sign In</button>
          <button className="sign-Up">Sign Up</button>
        </div>
      </nav>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-small-title">BUILD YOUR PERFECT</p>
          <h1>
            Developer
            <br />
            <span>Steck</span>
          </h1>

          <p className="hero-description">
            Explore frontend, backend, database, and tooling options, customize
            compare them side by side, and put together the stack that fits your
            next project.
          </p>

          <div className="hero-buttons">
            <button className="explore-btn">Explore Technologies</button>

            <button className="learn-btn">Learn More</button>
          </div>
        </div>

        <div className="hero-image">
          <img className="hero-image" src={heroImage} alt="Hero" />
        </div>
      </section>

      <section className="technologies">
        <div className="section-heading">
          <h2>
            Explore the <span>Technologies</span>
          </h2>

          <p>Pick one technology per category to build your ideal stack.</p>
        </div>

        <div className="technology-layout">
          <div className="technology-grid">
            {technologies.map(technology => (
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

                <button className="add-btn">Add to Stack</button>
              </div>
            ))}
          </div>

          <div className="your-stack">
            <h3>Your Stack</h3>

            <p className="stack-count">2 Technology Selected</p>

            <div className="selected-tech">
              <div className="selected-icon">S</div>

              <div>
                <strong>Svelte</strong>
                <small>Frontend</small>
              </div>

              <button className="remove-btn">×</button>
            </div>

            <div className="selected-tech">
              <div className="selected-icon redis">🔴</div>

              <div>
                <strong>Redis</strong>
                <small>Database</small>
              </div>

              <button className="remove-btn">×</button>
            </div>

            <button className="remove-all">Remove All</button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          {/* Footer Brand */}
          <div className="footer-brand">
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

          {/* Product */}
          <div className="footer-column">
            <h4>PRODUCT</h4>

            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>

          {/* Company */}
          <div className="footer-column">
            <h4>COMPANY</h4>

            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>

          {/* Legal */}
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
    </>
  );
}
export default App;
