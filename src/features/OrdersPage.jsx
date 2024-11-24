import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function OrdersPage({ children }) {
  const cart = useSelector((state) => state.cart);
  const minutes = Math.floor(Math.random() * (35 - 15) + 15);
  const date = new Date();
  let deliveryDate = new Date(date.getTime() + minutes * 60000);
  const deliveredWithin = date.getMinutes() - deliveryDate.getMinutes();
  deliveryDate = new Date(date.getTime() + deliveredWithin * 60000);

  return (
      <>
          {children}
      <div className="max-w-[90%] mx-auto mt-10">
        {cart.items.length > 0 ? (
          <div>
            <div className="max-w-[60%] mx-auto">
              <Link
                className="text-orange-500 text-sm mb-8 block underline font-semibold"
                to="/menu"
              >
                Back to menu &rarr;
              </Link>
            </div>
            <div className="max-w-[60%] mx-auto flex flex-col bg-gray-100 mb-8 p-2.5 rounded-md">
              <p className="mb-2 text-sm font-semibold">
                Order Status: <span className="text-orange-500">Confirmed</span>
              </p>
              <div>
                <p className="font-semibold text-lg">
                  Your order will be delivered within {deliveredWithin} mins.
                </p>
                <p className="text-gray-400 text-xs italic">
                  {"(Estimated Delivery: " +
                    `${deliveryDate.toDateString()}, ${
                      deliveryDate.toTimeString().split(" ")[0]
                    })`}
                </p>
              </div>
            </div>
            <div className=" max-w-[60%] mx-auto">
              {cart.items.map((item) => (
                <div
                  key={item.key}
                  className="max-w-7xl mx-auto flex justify-between items-center py-4  border-b first:border-t"
                >
                  <div>
                    <div className="flex gap-4">
                      <p className="font-semibold">{item.quantity}x</p>
                      <h3 className="text-gray-900">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 italic">
                      {item.ingredients.join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-10 justify-center items-center">
                    <p>&#8377;{item.unitPrice * 10 * item.quantity}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-[60%] mx-auto mb-4 mt-8 p-2.5 rounded-md bg-gray-100">
              <p>Order Price: &#8377;{cart.totalPrice}</p>
              <p>
                Platform Charge: &#8377;{Math.floor(cart.totalPrice * 0.03)}
                <p className="font-semibold mt-2 text-lg">
                  Total price to pay: &#8377;
                  {Math.floor(cart.totalPrice + cart.totalPrice * 0.03)}
                </p>
              </p>
            </div>
          </div>
        ) : (
          <div className="max-w-[60%] mx-auto bg-gray-100 p-4 rounded-md">
            <p className="font-semibold text-3xl text-gray-400 mb-2">
              You don't have any orders.
            </p>
            <p className="">
              Go back to{" "}
              <Link className="text-orange-500" to="/menu">
                menu
              </Link>{" "}
              and make some orders.
            </p>
          </div>
        )}
      </div>
    </>
  );
}
