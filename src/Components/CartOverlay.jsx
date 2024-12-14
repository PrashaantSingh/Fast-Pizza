import { Link } from "react-router-dom";

export default function CartOverlay({ cart }) {
  return (
    <div className="w-full bg-black bg-opacity-90 text-white p-4 flex justify-between fixed bottom-0 left-0 z-20">
      <p>Total Price: &#8377;{cart.totalPrice}</p>
      <Link className="text-orange-500" to="/cart">
        Go to cart &rarr;
      </Link>
    </div>
  );
}
