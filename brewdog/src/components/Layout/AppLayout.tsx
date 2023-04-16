import React from "react";
import { useNavigate } from "react-router-dom";

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const navigate = useNavigate();

  const handleNavigate = (location: string) => {
    navigate(location);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container-fluid">
          <span
            role="button"
            className="navbar-brand"
            onClick={() => handleNavigate("/")}
          >
            Technical Test
          </span>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span
                  role="button"
                  className="nav-link"
                  onClick={() => handleNavigate("/Grid")}
                >
                  Beer Grid
                </span>
              </li>
              <li className="nav-item">
                <span
                  role="button"
                  className="nav-link"
                  onClick={() => handleNavigate("/Cards")}
                >
                  Beer Cards
                </span>
              </li>
              <li className="nav-item">
                <span
                  role="button"
                  className="nav-link"
                  onClick={() => handleNavigate("/Member")}
                >
                  Member
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </>
  );
};

export default AppLayout;
