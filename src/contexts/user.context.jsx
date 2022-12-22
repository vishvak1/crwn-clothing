import { createContext, useState, useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        if (!user.displayName) return; // if user does not have displayName value then it's a result of the sign up, which is handled separately in the firebase.util.js Hence return stops handling this user object any further.
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const updateUser = (user) => {
    setCurrentUser(user);
  };

  return (
    <UserContext.Provider value={{ ...value, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
