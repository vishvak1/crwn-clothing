import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../src/utils/firebase/firebase.util";

import NavigationBar from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import Auth from "./routes/auth/auth.component";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout.component";

import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        if (!user.displayName) return; // if user does not have displayName value then it's a result of the sign up, which is handled separately in the firebase.util.js Hence return stops handling this user object any further.
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Auth />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
