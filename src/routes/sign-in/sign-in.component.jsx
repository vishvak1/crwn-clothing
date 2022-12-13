import { async } from "@firebase/util";
import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.util";

const SignIn = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user);
      }
    }

    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h2>This is the sign-in page</h2>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>

      <SignUpForm />
    </div>
  );
};

export default SignIn;
