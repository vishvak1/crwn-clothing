import {
  createAuthUserWithEmailAndPassword,
  updateAuthProfile,
  createUserDocumentFromAuth,
} from "../firebase/firebase.util";

export const register = async (email, password, name) => {
  try {
    // Create user with email and password
    const user = await createAuthUserWithEmailAndPassword(email, password);
    // Update the user with the entered displayName and also update the user in the user.context.jsx
    await updateAuthProfile(user, name);

    //   .then(() => {
    //     updateUser(user);
    //   });

    // Create a firestore instance for the user
    await createUserDocumentFromAuth(user);

    return user;
  } catch (error) {
    console.log(error);
  }
};
