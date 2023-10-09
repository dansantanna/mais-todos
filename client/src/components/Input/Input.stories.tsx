import { useEffect, useState } from "react";
import Input, { InputProps } from ".";

export default {
  title: "components/Input",
  component: Input,
  args: {
    label: "Input label text",
    name: "storybook-input",
    value: "",
    required: false,
  },
};

export const Component = ({ value, ...args }: InputProps) => {
  const [valueState, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <Input
      value={valueState}
      onChange={(evt) => setValue(evt.target.value)}
      {...args}
    />
  );
};
