import reactLogo from "../../assets/react.svg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img className="lo" src={reactLogo} alt="React Logo" />
      <span className="logo-title">ReactFacts</span>
    </nav>
  );
}
