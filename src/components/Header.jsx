import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Header() {
  return (
    <div className="header">
      <h1 onClick={() => window.location.replace("/")}>devFinder</h1>
      <div className="light-dark-mode">
        <p>Light</p>
        <FontAwesomeIcon icon={faSun} spin />
      </div>
    </div>
  );
}
