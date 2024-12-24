import "./Header.css";
import claudeLogo from "../../assets/Chef-Claude-Icon.svg";

function Header() {
  return (
    <div className="header">
      <img src={claudeLogo} alt="chef claude logo" className="header-logo" />
      <h1 className="header-title">Chef Claude</h1>
    </div>
  );
}

export default Header;
