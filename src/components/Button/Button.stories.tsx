import Button from ".";

export default {
  title: "components/Button",
  component: Button,
  args: {
    text: "Click here",
  },
};

export const Component = ({ text }: { text: string }) => {
  return <Button>Click here</Button>;
};
