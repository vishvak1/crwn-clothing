import { useState, useContext } from "react";
import { useDispatch } from "react-redux";

import { register } from "../../utils/auth/sign-up.util";

import FormInput from "../form-input/form-input.component";
import { Button, BUTTON_TYPE } from "../button/button.component";

import { UserContext } from "../../contexts/user.context";

import { SignUpContainer } from "../sign-up-form/sign-up-form.styles";
import { setCurrentUser } from "../../store/user/user.action";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const { currentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      document
        .querySelector(".password-prompt")
        .classList.remove("display-none");
      return;
    } else {
      document.querySelector(".password-prompt").classList.add("display-none");
    }

    try {
      const user = await register(email, password, displayName);
      dispatch(setCurrentUser(user));

      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SignUpContainer>
      <h2>I don't have an account</h2>
      <span>Sign up with your email and password</span>
      <p className="password-prompt display-none">
        <span style={{ marginRight: "5px", fontSize: "1.5rem" }}>&#9888;</span>
        The passwords you entered do not match. Please check the same and try
        again.
      </p>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
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
        <FormInput
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        {currentUser ? (
          <Button type="button" buttonType={BUTTON_TYPE.disabled} disabled>
            Sign up
          </Button>
        ) : (
          <Button type="submit">Sign up</Button>
        )}
      </form>
    </SignUpContainer>
  );
};

export default SignUpForm;
