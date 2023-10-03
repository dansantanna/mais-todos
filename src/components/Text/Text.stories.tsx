import Text from ".";

export default {
  title: "components/Text",
  component: Text,
  args: {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et imperdiet nisl. Duis interdum diam neque. Vivamus pharetra dui vel nisl pulvinar interdum. Nam bibendum magna aliquam orci faucibus, non finibus tortor feugiat. Aenean vulputate blandit elit at tincidunt. Suspendisse porttitor, est sit amet suscipit congue, quam ipsum efficitur risus, ut condimentum mauris tellus ac felis. Quisque ultrices sem eget risus fermentum porttitor sed id ligula. Sed tristique luctus mattis. Phasellus imperdiet vehicula diam, at blandit nisl sodales at. Sed vitae lobortis eros. Proin at dolor sed neque cursus viverra dapibus pretium tortor.",
  },
};

export const Component = ({ text }: { text: string }) => {
  return <Text>{text}</Text>;
};
