import { Link } from "react-router-dom";


export default function NoOrders() {
  return (
    <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto bg-gray-100 p-4 rounded-md">
    <p className="font-semibold text-3xl text-gray-400 mb-2">
      You don't have any orders.
    </p>
    <p>
      Go back to{" "}
      <Link className="text-orange-500" to="/menu">
        menu
      </Link>{" "}
      and make some orders.
    </p>
  </div>
  )
}
