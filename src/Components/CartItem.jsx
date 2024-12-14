import { useDispatch } from "react-redux";
import { clearCart, removeFromCart } from "../redux/reducers/slices/cartSlice";
import UpdateQuantityBtn from "./UpdateQuantityBtn";

export default function CartItem({ item }) {
    const dispatch = useDispatch();
    function handleRemoveFromCart(item, dispatch) {
        dispatch(removeFromCart(item.id));
      }
  
    return (
      <div className="max-w-[95%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto flex justify-between items-center bg-gray-50 mb-4 p-6 rounded-md">
        <div className="flex gap-1 flex-col sm:flex-row md:flex-row lg:flex-row ">
          <div className="flex gap-2">
            <p>{item.quantity} x</p>
            <h3>{item.name}</h3>
          </div>
          <p className="text-gray-500">(&#8377;{item.unitPrice * 10 * item.quantity})</p>
        </div>
  
        <div className="flex gap-10 justify-center items-center">
          <UpdateQuantityBtn item={item} />
          <button
            className="bg-red-500 text-white rounded-full h-6 w-6 text-xs"
            onClick={() => handleRemoveFromCart(item, dispatch)}
          >
           &times;
          </button>
        </div>
      </div>
    );
  }