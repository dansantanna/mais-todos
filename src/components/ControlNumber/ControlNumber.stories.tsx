import { useEffect, useState } from "react";
import ControlNumber, { ControlNumberProps } from ".";

export default {
  title: "components/ControlNumber",
  component: ControlNumber,
  argTypes: { onChange: { action: "changed" } },
  args: { value: 1, min: 1 },
};

export const Component = ({ onChange, value }: ControlNumberProps) => {
  const [quantity, setQuantity] = useState(value);

  const handleChange = (value: number) => {
    setQuantity(value);
    onChange(value);
  };

  useEffect(() => {
    setQuantity(value);
  }, [value]);

  return <ControlNumber value={quantity} onChange={handleChange} />;
};
