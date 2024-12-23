import "./Header.css";
import globe from "../../assets/globe.svg";
export default function Header() {
  return (
    <header className="header">
      <img className="header-logo" src={globe} alt="globe icon" />
      <p className="header-title">my travel journal.</p>
    </header>
  );
}
