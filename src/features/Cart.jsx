import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart
} from "../redux/reducers/slices/cartSlice";
import CartItem from "../Components/CartItem";
import EmptyCartMessage from "./EmptyCartMessage";

export default function Cart({ children }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function handleClearCart(dispatch) {
    dispatch(clearCart());
  }
  return (
    <>
      {children}
      <div className="mx-auto max-w-7xl">
        {cart.items.length === 0 ? (
        <EmptyCartMessage/>
        ) : (
          <div>
            <Link className="text-orange-500 underline mt-6 block ml-4" to="/menu">
              {" "}
              Back to menu &rarr;
            </Link>
            <p className="text-2xl font-semibold text-orange-900/95 text-center mt-4 mb-4">
              Your Cart
            </p>
            <div>
              {cart.items.map((pizza) => {
                return <CartItem key={pizza.id} item={pizza} />;
              })}
            </div>
            <p className="max-w-[95%] xs:max-w-[85%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto font-bold mt-6">
              Total Price: &#8377;{cart.totalPrice}
            </p>
            <div className="flex gap-4 text-white text-bold text-sm mx-auto max-w-max mt-10">
              <Link
                to="/orders"
                  className="bg-orange-500 text-sm px-4 py-2  md:px-5 md:py-3 rounded-full"
              >
                Order Pizzas
              </Link>
              <button
                className="bg-red-600 text-sm px-4 py-2  md:px-5 md:py-3 rounded-full"
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



