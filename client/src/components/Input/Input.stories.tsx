import { useEffect, useState } from "react";
import Input, { InputProps } from ".";

export default {
  title: "components/Input",
  component: Input,
  args: {
    label: "Input label text",
    name: "storybook-input",
    value: "",
    error: "",
    required: false,
  },
  argTypes: {
    onChange: {
      control: "func",
    },
  },
};

export const Component = ({ value, onChange, ...args }: InputProps) => {
  const [valueState, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <Input
      value={valueState}
      onChange={(evt) => {
        setValue(evt.target.value);
        onChange?.(evt);
      }}
      {...args}
    />
  );
};
