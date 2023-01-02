import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.util";
import { createAction } from "../utils/reducer/reducer.util";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_REDUCER_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const UserReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_REDUCER_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in UserReducer`);
  }
};

const INITIAL_STATE = { currentUser: null };

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser }, dispatch] = useReducer(UserReducer, INITIAL_STATE);

  const setCurrentUser = (user) => {
    dispatch(createAction(USER_REDUCER_TYPES.SET_CURRENT_USER, user));
  };

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
