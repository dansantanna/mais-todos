import { useEffect, useState } from "react";
import TextArea, { TextAreaProps } from ".";

export default {
  title: "components/TextArea",
  component: TextArea,
  args: {
    label: "TextArea label text",
    name: "storybook-textArea",
    value: "",
    required: false,
  },
  argTypes: {
    onChange: {
      control: "func",
    },
  },
};

export const Component = ({ value, onChange, ...args }: TextAreaProps) => {
  const [valueState, setValue] = useState(value);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <TextArea
      value={valueState}
      onChange={(evt) => {
        setValue(evt.target.value);
        onChange?.(evt);
      }}
      {...args}
    />
  );
};
