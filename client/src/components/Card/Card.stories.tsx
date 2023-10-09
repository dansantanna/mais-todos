import Title from "components/Title";
import Text from "components/Text";
import Card from ".";

export default {
  title: "components/Card",
  component: Card,
};

export const Component = () => {
  return (
    <Card>
      <Title fontSize={21}>Product</Title>
      <Text>Description</Text>
    </Card>
  );
};
