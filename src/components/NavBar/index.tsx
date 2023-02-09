import { NavBarItem } from "./components/NavBarItem";
import "./styles.css";

const NavBar: React.FC = () => {
  return (
    <nav className="container-nav">
      <img src="/images/logoText.svg" width="60px" height="60px" alt="Logo" />
      <div className="content-items">
        <NavBarItem path="/" title="Home" />
        <NavBarItem path="users" title="Users" />
      </div>
    </nav>
  );
};
export { NavBar };
