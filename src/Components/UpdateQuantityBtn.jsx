import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity } from "../redux/reducers/slices/cartSlice";

export default function UpdateQuantityBtn({ item }) {
    const dispatch = useDispatch();
    return (
      <div className="flex gap-2 text-white">
        <button
          onClick={() => dispatch(decreaseItemQuantity(item))}
          className="bg-orange-500/95 h-6 w-6 rounded-full text-xs"
        >
          -
        </button>
        <p className="bold text-black">{item.quantity}</p>
        <button
          onClick={() => dispatch(increaseItemQuantity(item))}
          className="bg-orange-500/95 h-6 w-6 rounded-full text-xs"
        >
          +
        </button>
      </div>
    );
  }