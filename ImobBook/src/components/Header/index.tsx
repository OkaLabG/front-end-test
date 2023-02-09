import './Header.scss'
import imobBookLogo from '../../assets/ImobBookLogo.svg'
import logoImage from '../../assets/LogoImage.svg'
import { Link } from "react-router-dom";

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({ title}) => {
  
  return (
    <header className="header">
      <Link to="/">
        <img src={imobBookLogo} alt="logo" />
      </Link>

      <h1>{title}</h1>
      <Link to="/posts">
        <img className="logo" src={logoImage} alt="logoImage" />
      </Link>
    </header>
  );
};

export { Header };
