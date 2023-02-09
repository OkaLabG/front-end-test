import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from "../NavBar";
import "./styles.css";

const Layout: React.FC = () => {
  return (
    <div className="container-layout">
      <NavBar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export { Layout };
