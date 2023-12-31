import Product, { ProductProps } from ".";

export default {
  title: "components/Product",
  component: Product,
  args: {
    title: "Produto 01",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et imperdiet nisl. Duis interdum diam neque. Vivamus pharetra dui vel nisl pulvinar interdum. Nam bibendum magna aliquam orci faucibus, non finibus tortor feugiat. Aenean vulputate blandit elit at tincidunt. Suspendisse porttitor, est sit amet suscipit congue, quam ipsum efficitur risus, ut condimentum mauris tellus ac felis. Quisque ultrices sem eget risus fermentum porttitor sed id ligula. Sed tristique luctus mattis. Phasellus imperdiet vehicula diam, at blandit nisl sodales at. Sed vitae lobortis eros. Proin at dolor sed neque cursus viverra dapibus pretium tortor.",
    image:
      "https://www.maistodos.com.br/wp-content/uploads/2023/03/Logo-MaisTodos-165x41.png",
    price: 123.32,
  },
};

export const Component = (args: ProductProps) => {
  return <Product {...args} />;
};
