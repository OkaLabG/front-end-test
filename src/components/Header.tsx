import "../styles/components/header.sass";

import Logo from "../img/logoS.svg";

const Header: React.FC = () => {
  return (
    <div id="header">
      <div id="container-img">
        <img src={Logo} alt="logo" />
        <p>ImobBook</p>
      </div>
    </div>
  );
};
export default Header;
