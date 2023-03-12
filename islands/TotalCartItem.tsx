import { total } from "../common/states/index.ts";

export default function TotalCartItem() {
    return <div>
        {total.value}
    </div>
}