import { Link } from "react-router-dom";

export default function EmptyCartMessage() {
  return (
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
  );
}
