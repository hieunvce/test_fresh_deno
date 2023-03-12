import { computed, signal } from "@preact/signals";
import { Cart } from "../types/index.ts";

export const cart = signal<Cart>(new Map());

export const total = computed(() => {
  return Array.from(cart.value.values()).reduce(
    (previousValue, currentValue) => {
      return previousValue + currentValue;
    },
    0,
  );
});
