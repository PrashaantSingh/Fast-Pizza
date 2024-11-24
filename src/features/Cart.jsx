import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "../redux/reducers/slices/cartSlice";

export default function Cart({children}) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      {children}
    <div className="mx-auto max-w-7xl">
      {cart.items.length === 0 ? (
        <div className="max-w-[60%] mx-auto bg-gray-100 p-4 rounded-md mt-8">
          <p className="font-semibold text-3xl text-gray-400 mb-2">
            You don't have any items in your cart.
          </p>
          <p className="">
            Go back to{" "}
            <Link className="text-orange-500" to="/menu">
              menu
            </Link>{" "}
            and add some items.
          </p>
        </div>
      ) : (
        <div>
         
          <Link className="text-orange-500 underline mt-6 block" to="/menu"> Back to menu &rarr;
          </Link>
          <p className="text-2xl font-semibold text-orange-900/95 text-center mt-4 mb-4">
            Your Cart
          </p>
          <div>
            {cart.items.map((pizza) => {
              return <CartItem key={pizza.id} item={pizza} />;
            })}
          </div>
          <p className="max-w-[60%] mx-auto font-bold mt-6">
            Total Price: &#8377;{cart.totalPrice}
          </p>
          <div className="flex gap-4 text-white text-bold text-sm mx-auto max-w-max mt-10">
            <Link to="/orders" className="bg-orange-500 px-5 py-3 rounded-full">
              Order Pizzas
            </Link>
            <button
              className="bg-red-600 px-5 py-3 rounded-full"
              onClick={() => handleClearCart(dispatch)}
              >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
      </>
  );
}
function CartItem({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="max-w-[60%] mx-auto flex justify-between items-center bg-gray-50 mb-4 p-6 rounded-md">
      <div className="flex gap-4">
        <p>{item.quantity} x</p>
        <h3>{item.name}</h3>
      </div>

      <div className="flex gap-10 justify-center items-center">
        <p>&#8377;{item.unitPrice * 10 * item.quantity}</p>
        <UpdateQuantityBtn item={item} />
        <button
          className="text-red-500 text-semibold"
          onClick={() => handleRemoveFromCart(item, dispatch)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

function handleRemoveFromCart(item, dispatch) {
  dispatch(removeFromCart(item.id));
}
function handleClearCart(dispatch) {
  dispatch(clearCart());
}

function UpdateQuantityBtn({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-2 text-white">
      <button
        onClick={() => dispatch(decreaseItemQuantity(item))}
        className="bg-orange-500/95 h-7 w-7 rounded-full"
      >
        -
      </button>
      <p className="bold text-black">{item.quantity}</p>
      <button
        onClick={() => dispatch(increaseItemQuantity(item))}
        className="bg-orange-500/95 h-7 w-7 rounded-full"
      >
        +
      </button>
    </div>
  );
}
