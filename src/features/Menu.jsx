import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ItemCard from "../Components/ItemCard";
import CartOverlay from "../Components/CartOverlay";

export default function Menu({ children }) {
  const [pizzaData, setPizzaData] = useState([]);
  const cart = useSelector((state) => state.cart);
  const [overlayIsVisible, setOverlayIsVisible] = useState(false);

  useEffect(() => setOverlayIsVisible(cart.items.length > 0),[cart]);
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
        <h1 className="text-3xl text-center font-bold text-orange-700 pt-12 mb-2">
          Our Menu
        </h1>
        <div
          className="grid 
      grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 
      gap-3 px-6 py-3 text-orange-800 max-w-[90%] mx-auto"
        >
          {!pizzaData
            ? "Loading..."
            : pizzaData.map((pizza) => (
                <ItemCard
                  key={pizza.id}
                  pizza={pizza}
                />
              ))}
        </div>
      </div>

      {overlayIsVisible && (
        <CartOverlay cart={cart} />
      )}
    </>
  );
}