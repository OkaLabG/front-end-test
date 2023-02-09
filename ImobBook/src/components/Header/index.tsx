import './Header.scss'
import imobBookLogo from '../../assets/ImobBookLogo.svg'
import logoImage from '../../assets/LogoImage.svg'

interface IHeaderProps {
  title: string
}

const Header: React.FC<IHeaderProps> = ({ title}) => {
  return (
    <header className="header">
      <img src={imobBookLogo} alt="logo" />
      <h1>{title}</h1>
      <img className="logo" src={logoImage} alt="logoImage" />
    </header>
  );
};

export { Header };
