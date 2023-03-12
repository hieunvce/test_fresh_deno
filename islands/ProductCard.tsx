import { cart, total } from "../common/states/index.ts";
import { computed } from "@preact/signals-core";
import { Product } from "../common/types/index.ts";
import { mainColor } from "../common/states/products.ts";
type ProductCardProps = {
  product: Product;
};
export default function ProductCard(
  { product }: ProductCardProps,
) {
  const handleAddToCart = () => {
    const currentQuantity = cart.value.get(product.id) || 1;
    cart.value = new Map(cart.value.set(product.id, currentQuantity + 1));
  };
  return (
    <div
      className="flex flex-col"
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-auto"
      />

      <div className="mt-4">
        <div>{product.name}</div>

        <hr className="my-2" />

        <div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <div>{product.price}</div>
              <div className="px-2">x</div>
              <div>{cart.value.get(product.id) || 1}</div>
            </div>
            <div>
              <button
                className="px-2 py-2 border rounded-1/2"
                onClick={() => handleAddToCart()}
              >
                <img src="/icons/plus.svg" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
          voluptate cumque ratione accusamus provident, cupiditate omnis
          inventore cum ipsum ullam ipsam amet dolore temporibus atque
          doloremque dolor! Nostrum, natus tempora.
        </p>
        <a href="#" className="py-4 inline-block underline rounded-lg">More</a>
      </div>
    </div>
  );
}
