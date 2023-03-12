import { AppProps } from "$fresh/src/server/types.ts";
import { mainColor } from "../common/states/products.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <body>
        <Component />
      </body>
    </html>
  );
}
