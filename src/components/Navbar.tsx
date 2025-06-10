import logo from "../assets/redchil-logo.jpg";
function Navbar() {
  return (
    <header className="navbar">
      <img className="navbar-logo" src={logo} alt="logo" />
      <h1 className="navbar-title">RedChil</h1>
      <nav className="navbar-links">
        <a className="navbar-link" href="#hero">
          Home
        </a>
        <a className="navbar-link" href="#services">
          Services
        </a>
        <a className="navbar-link" href="#portfolio">
          Portfolio
        </a>
        <a className="navbar-link" href="#contact">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
