import { signal } from "@preact/signals";
import { computed } from "https://esm.sh/v111/@preact/signals-core@1.0.1/X-ZS8q/dist/signals-core";
import { productMainColors, products } from "../data/products.ts";
import { MainColor } from "../types/index.ts";

export const currentProductIndex = signal<number>(0);

export const nextProduct = () => {
  const nextProductIndex = currentProductIndex.value + 1;
  currentProductIndex.value = nextProductIndex >= products.length
    ? 0
    : nextProductIndex;
};

export const previousProduct = () => {
  const previousProductIndex = currentProductIndex.value - 1;
  currentProductIndex.value = previousProductIndex < 0
    ? products.length - 1
    : previousProductIndex;
};

export const mainColor = computed<MainColor>(() => {
  const currentProduct = products[currentProductIndex.value];
  return { ...productMainColors[currentProduct.id] };
});
