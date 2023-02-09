import { Button } from "../../Button";
import { BiCoffeeTogo } from "react-icons/bi";
import { Link } from "react-router-dom";

interface ItemProps {
  title: string;
  path: string;
}

interface NavBarItemProps extends ItemProps {
  menu?: ItemProps[];
}

const NavBarItem: React.FC<NavBarItemProps> = ({ path, title, menu }) => {
  return (
    <div className="container-nav-item">
      <Link
        to={path}
        style={{
          textDecoration: "none",
        }}
      >
        <Button title={title} variant="link" width="fit-content" />
      </Link>
    </div>
  );
};

export { NavBarItem };
