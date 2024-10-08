import "./index.scss";
import logoImage from "../../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <div className="nav-logo-container">
          <img className="nav-logo" src={logoImage}></img>
        </div>
        <div className="random-1"></div>
        <div className="random-2"></div>
      </div>
    </>
  );
}

export default Navbar;
