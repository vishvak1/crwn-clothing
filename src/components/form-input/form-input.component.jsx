import { Group, Input, Label } from "../form-input/form-input.styles";

const FormInput = ({ label, ...inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {label && (
        <Label htmlFor={inputOptions.name} shrink={inputOptions.value.length}>
          {label}
        </Label>
      )}
    </Group>
  );
};

export default FormInput;
