import "./MainContent.css";
import reactLogo from "../../assets/react.svg";

export default function MainContent() {
  return (
    <main className="main-content">
      <img className="main-logo" src={reactLogo} />
      <h1 className="heading">Fun Facts about React</h1>
      <ul className="facts-list">
        <li className="fact-item">Was first release in 2013</li>
        <li className="fact-item">Was originally created by Jordan Walke</li>
        <li className="fact-item">Has well over 200k stars on GitHub</li>
        <li className="fact-item">Is maintained by Meta</li>
        <li className="fact-item">
          Powers thousands of enterprise apps, including mobile apps
        </li>
      </ul>
    </main>
  );
}
