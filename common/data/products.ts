import { MainColor, Product } from "../types/index.ts";

export const products: Product[] = [{
  id: 1,
  name: "Chardonnay",
  price: 120000,
  image: "/images/wine-bottle-1-removebg-preview.png",
}, {
  id: 2,
  name: "Tempranillo",
  price: 240000,
  image: "/images/wine-bottle-2-removebg-preview.png",
}, {
  id: 3,
  name: "Moyashi",
  price: 510000,
  image: "/images/wine-bottle-3-removebg-preview.png",
}];

export const productMainColors: Record<number, MainColor> = {
  1: {
    color: "#0D0000",
    background: `linear-gradient(
        110deg,
        hsl(14deg 90% 81%) 0%,
        hsl(14deg 90% 81%) 16%,
        hsl(14deg 91% 82%) 24%,
        hsl(14deg 91% 82%) 30%,
        hsl(14deg 92% 83%) 35%,
        hsl(14deg 92% 83%) 40%,
        hsl(15deg 93% 83%) 45%,
        hsl(15deg 93% 84%) 50%,
        hsl(15deg 94% 84%) 55%,
        hsl(15deg 94% 85%) 60%,
        hsl(15deg 95% 85%) 65%,
        hsl(15deg 95% 86%) 70%,
        hsl(15deg 96% 86%) 76%,
        hsl(15deg 96% 86%) 84%,
        hsl(15deg 97% 87%) 100%
      )`,
  },
  2: {
    color: "#F2F2F2",
    background: `linear-gradient(
        110deg,
        hsl(0deg 80% 47%) 0%,
        hsl(360deg 79% 46%) 3%,
        hsl(360deg 77% 46%) 7%,
        hsl(360deg 76% 45%) 14%,
        hsl(360deg 74% 44%) 29%,
        hsl(360deg 73% 43%) 65%,
        hsl(360deg 71% 42%) 80%,
        hsl(360deg 70% 41%) 89%,
        hsl(360deg 68% 40%) 95%,
        hsl(0deg 67% 39%) 100%
      )`,
  },
  3: {
    color: "#0D0D0D",
    background: `linear-gradient(
        110deg,
        hsl(40deg 61% 87%) 0%,
        hsl(40deg 61% 87%) 16%,
        hsl(40deg 60% 88%) 24%,
        hsl(41deg 60% 88%) 30%,
        hsl(42deg 60% 89%) 35%,
        hsl(42deg 59% 89%) 40%,
        hsl(43deg 59% 90%) 45%,
        hsl(43deg 59% 90%) 50%,
        hsl(44deg 58% 91%) 55%,
        hsl(44deg 58% 91%) 60%,
        hsl(45deg 58% 92%) 65%,
        hsl(45deg 58% 92%) 70%,
        hsl(46deg 57% 93%) 76%,
        hsl(47deg 57% 93%) 84%,
        hsl(47deg 58% 94%) 100%
      )`,
  },
} as const;
