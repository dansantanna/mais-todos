import Button from ".";

export default {
  title: "components/Button",
  component: Button,
  args: {
    text: "Click here",
  },
};

export const Component = ({ text }: { text: string }) => {
  return (
    <div>
      <Button>{text}</Button>
      <Button variant="secondary">{text}</Button>
    </div>
  );
};
