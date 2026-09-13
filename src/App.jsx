import './App.css';
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
    </>
  );
}
export default App;
