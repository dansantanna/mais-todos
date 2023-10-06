import SummaryOrder, { SummaryOrderProps } from ".";

export default {
  title: "components/SummaryOrder",
  component: SummaryOrder,
  args: {
    total: 130,
    items: [
      {
        id: "0001",
        title: "Product 01",
        quantity: 1,
        price: 12,
      },
      {
        id: "0002",
        title: "Product 02",
        quantity: 2,
        price: 13,
      },
      {
        id: "0003",
        title: "Product 03",
        quantity: 3,
        price: 14,
      },
      {
        id: "0004",
        title: "Product 04",
        quantity: 3,
        price: 540,
      },
    ],
  },
};

export const Component = (args: SummaryOrderProps) => (
  <SummaryOrder {...args} />
);
