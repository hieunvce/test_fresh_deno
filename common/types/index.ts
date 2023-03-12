export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export type Cart = Map<number, number>;

export type MainColor = {
  color: string;
  background: string;
}