import { mainColor } from "../common/states/products.ts";

export default function ThemeChanger() {
  const css = `
        body {
            background-image: ${mainColor.value.background};
            color: ${mainColor.value.color};
        }
    `;
  return (
    <div>
      <style>
        {css}
      </style>
    </div>
  );
}
