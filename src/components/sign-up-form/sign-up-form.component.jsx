import { useState } from "react";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <form onSubmit={() => {}}>
        <label htmlFor="displayName">Display Name</label>
        <input
          type="text"
          name="displayName"
          onChange={handleSubmit}
          value={displayName}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleSubmit}
          value={email}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={handleSubmit}
          value={password}
          required
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={handleSubmit}
          value={confirmPassword}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
