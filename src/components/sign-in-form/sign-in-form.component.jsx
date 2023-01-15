import { useState } from "react";
import { useSelector } from "react-redux";

import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.util";

import FormInput from "../form-input/form-input.component";
import { Button, BUTTON_TYPE } from "../button/button.component";

import { SignInContainer, ButtonsContainer } from "./sign-in-form.styles";

import { selectCurrentUser } from "../../store/user/user.selector";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // const { currentUser } = useContext(UserContext);
  const currentUser = useSelector(selectCurrentUser);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("user with the entered email not found");
          break;
        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <SignInContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <p className="password-prompt display-none">
        <span style={{ marginRight: "5px", fontSize: "1.5rem" }}>&#9888;</span>
        The passwords you entered do not match. Please check the same and try
        again.
      </p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        {currentUser ? (
          <ButtonsContainer>
            <Button type="button" buttonType="disabled" disabled>
              Sign In
            </Button>
            <Button type="button" buttonType="disabled" disabled>
              Sign in with Google
            </Button>
          </ButtonsContainer>
        ) : (
          <ButtonsContainer>
            <Button type="submit">Sign In</Button>
            <Button
              type="button"
              buttonType={BUTTON_TYPE.google}
              onClick={signInWithGoogle}
            >
              Sign in with Google
            </Button>
          </ButtonsContainer>
        )}
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
