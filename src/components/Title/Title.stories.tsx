import Title from ".";

export default {
  title: "components/Title",
  component: Text,
  args: {
    text: "Title",
  },
};

export const Component = ({ text }: { text: string }) => {
  return <Title>{text}</Title>;
};
