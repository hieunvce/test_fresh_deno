import LemonIcon from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/lemon-2.tsx";
import { computed } from "@preact/signals";
import { cart } from "../common/states/index.ts";
import { total } from "../common/states/index.ts";
import TotalCartItem from "../islands/TotalCartItem.tsx";
type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "Components", href: "/components" },
    { name: "Docs", href: "/docs" },
  ];

  return (
    <div class="w-full max-w-screen-xl py-6 px-8 flex flex-col md:flex-row gap-4 mx-auto">
      <div class="flex items-center flex-1">
        <LemonIcon />
        <div class="text-2xl  ml-1 font-bold">
          Fresh
        </div>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>

      <div><TotalCartItem/></div>
    </div>
  );
}
