import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  addToCart,
  increaseItemQuantity,
  removeFromCart,
} from "../redux/reducers/slices/cartSlice";
export default function Menu({ children}) {
  const [pizzaData, setPizzaData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      // const respone = await fetch(
      //   "https://react-fast-pizza-api.onrender.com/api/menu"
      // );
      const respone = await fetch("/public/data.json");
      const result = await respone.json();
      setPizzaData(result.data);
    };
    fetchData();
  }, []);
  return (
    <>
      {children}
      <div className="bg-orange-50">
        <h1 className="text-3xl text-center font-bold text-orange-700 pt-12 mb-2">Our Menu</h1>
      <div className="grid grid-rows-4 grid-cols-5 gap-3 px-6 py-3 text-orange-800 max-w-[90%] mx-auto">
        {!pizzaData
          ? "Loading..."
          : pizzaData.map((pizza) => <Card key={pizza.id} pizza={pizza} />)}
      </div>
    </div>
</>
  );
}

function Card({ pizza }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isInTheCart = cart.items.some((item) => item.id === pizza.id);
  const { name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
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
                handleAddToCart(pizza, dispatch, cart.items, event)
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

function handleAddToCart(pizza, dispatch, items, event) {
  const isInTheCart = items.some((item) => item.id === pizza.id);
  if (isInTheCart && event.target.innerText === "Remove from cart")
    return dispatch(removeFromCart(pizza.id));
  if (isInTheCart) return dispatch(increaseItemQuantity(pizza));
  dispatch(addToCart({ ...pizza, quantity: 1 }));
}

// function Card({ pizza }) {
//   const { name, unitPrice, imageUrl, ingredients, soldOut } = pizza;
//   return (
//     <div className="bg-gray-50 flex flex-col m-4 rounded-md">
//       <div className="">
//         <img className="block w-full h-auto" src={imageUrl} alt={name} />
//       </div>
//       <div className="flex flex-col justify-between gap-2 ">
//         <div>
//           <p>{name}</p>
//           <p className="capitalize text-slate-600 italic text-sm">
//             {ingredients.join(" ")}
//           </p>
//         </div>
//         <div className="flex justify-between items-center">
//           <p className="text-sm font-semibold text-gray-700">
//             {soldOut ? "Sold Out" : "Rs. " + unitPrice}
//           </p>
//           {!soldOut && (
//             <button className="bg-red-500 px-3 py-1 rounded-full text-sm text-white mt-auto">
//               Add to cart
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
