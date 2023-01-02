import { Outlet } from "react-router-dom";
import { useContext } from "react";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { signOutAuthUser } from "../../utils/firebase/firebase.util";

import { useSelector } from "react-redux";

import {
  LogoContainer,
  NavigationContainer,
  NavLink,
  NavLinksContainer,
} from "./navigation.styles";

const NavigationBar = () => {
  const { currentUser } = useSelector((state) => state.user);

  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <>
              <NavLink as="span">Hi, {currentUser.displayName}</NavLink>
              <NavLink as="span" onClick={signOutAuthUser}>
                SIGN-OUT
              </NavLink>
            </>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default NavigationBar;
