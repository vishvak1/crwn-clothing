import { Outlet, Link } from "react-router-dom";

import "./scss/navigation.styles.scss";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const NavigationBar = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo-container">
          <CrwnLogo />
        </div>
        <div className="nav-links-container">
          <Link className="nav-link">SHOP</Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
