import { useDispatch, useSelector } from "react-redux";
import { addToCart, increaseItemQuantity, removeFromCart } from "../redux/reducers/slices/cartSlice";

export default function ItemCard({ pizza }) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const isInTheCart = cart.items.some((item) => item.id === pizza.id);
    const { name, unitPrice, imageUrl, ingredients, soldOut } = pizza;

    function handleAddToCart(pizza, dispatch, items, event) {
        const isInTheCart = items.some((item) => item.id === pizza.id);
        if (isInTheCart && event.target.innerText === "Remove from cart") {
          return dispatch(removeFromCart(pizza.id));
        }
        if (isInTheCart) return dispatch(increaseItemQuantity(pizza));
        dispatch(addToCart({ ...pizza, quantity: 1 }));
      }
      

    return (
      <div
        className={`border-orange-500 border-solid flex flex-col m-4 rounded-md ${
          soldOut && "grayscale opacity-90"
        }`}
      >
        <div>
          <img className="block w-full h-auto" src={imageUrl} alt={name} />
        </div>
        <div className="flex flex-col justify-between gap-2 flex-grow px-2 pb-3">
          <div>
            <p className="mt-1 font-semibold">{name}</p>
            <p className="capitalize text-orange-800/[.68]  italic text-sm">
              {ingredients.join(", ")}
            </p>
          </div>
          <div className="mt-auto flex justify-between items-center">
            <p className="text-lg font-semibold">
              {soldOut ? "Sold Out" : "₹" + unitPrice * 10}
            </p>
            {!soldOut && (
              <button
                onClick={(event) =>
                  handleAddToCart(
                    pizza,
                    dispatch,
                    cart.items,
                    event
                  )
                }
                className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm"
              >
                {!isInTheCart ? "Add to Cart" : "Remove from cart"}
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
  