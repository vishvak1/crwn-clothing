import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.util";

import "./scss/navigation.styles.scss";

const NavigationBar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutAuthUser();
    setCurrentUser(null);
  };

  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN-IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default NavigationBar;
