import './App.css';
import logo from './assets/logo-text.png';
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
    </>
  );
}
export default App;
