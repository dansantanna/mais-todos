export default interface IProduct {
  id: string;
  title: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  category?: string;
  rating?: {
    rate: number;
    count: number;
  };
}
