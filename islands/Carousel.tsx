import { products } from "../common/data/products.ts";
import {
  currentProductIndex,
  nextProduct,
  previousProduct,
} from "../common/states/index.ts";
import ProductCard from "./ProductCard.tsx";

export default function Carousel() {
  return (
    <div className="overflow-clip h-full">
      <div className="h-full relative">
        <button
          className="p-4 bg-blue-100 absolute top-1/3 -left-4 border-1 rounded-1/2 transform translate-x-0 translate-y-1/2 z-10"
          onClick={() => previousProduct()}
        >
          <img src="/icons/arrow-left-circle.svg" alt="arrow left circle" />
        </button>

        <div className="h-full flex items-center">
          <ProductCard
            product={products[currentProductIndex.value]}
          />
        </div>

        <button
          className="p-4 bg-blue-100 absolute top-1/3 -right-4 border-1 rounded-1/2 transform translate-x-0 translate-y-1/2 z-10"
          onClick={() => nextProduct()}
        >
          <img src="/icons/arrow-right-circle.svg" alt="arrow right circle" />
        </button>
      </div>
    </div>
  );
}
