import {
  DisabledButton,
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

export const BUTTON_TYPE = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
  disabled: "disabled",
};

const getButton = (buttonType = BUTTON_TYPE.base) =>
  ({
    [BUTTON_TYPE.base]: BaseButton,
    [BUTTON_TYPE.google]: GoogleSignInButton,
    [BUTTON_TYPE.inverted]: InvertedButton,
    [BUTTON_TYPE.disabled]: DisabledButton,
  }[buttonType]);

export const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};
