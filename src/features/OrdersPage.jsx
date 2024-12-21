import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearCart } from "../redux/reducers/slices/cartSlice";
import NoOrders from "../Components/NoOrders";

export default function OrdersPage({ children }) {
  const cart = useSelector((state) => state.cart);
  const minutes = Math.floor(Math.random() * (35 - 15) + 15); 
  const deliveryDate = new Date(Date.now() + minutes * 60000); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function handleBackToMenu(e,dispatch,navigate) {
    e.preventDefault();
    navigate('/menu');
    dispatch(clearCart());
  
  }
  return (
    <>
      {children}
      <div className="max-w-[90%] mx-auto mt-10">
        {cart.items.length > 0 ? (
          <div>
            <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
              <Link onClick={(e)=>handleBackToMenu(e,dispatch,navigate)}
                className="text-orange-500 text-sm mb-8 block underline font-semibold"
                to="/menu"
              >
                Back to menu &rarr;
              </Link>
            </div>
            <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto flex flex-col bg-gray-100 mb-8 p-2.5 rounded-md">
              <p className="mb-2 text-sm font-semibold">
                Order Status: <span className="text-orange-500">Confirmed</span>
              </p>
              <div>
                <p className="font-semibold text-lg">
                  Your order will be delivered within {minutes} mins.
                </p>
                <p className="text-gray-400 text-xs italic">
                  (Estimated Delivery: {deliveryDate.toDateString()},{" "}
                  {deliveryDate.toTimeString().split(" ")[0]})
                </p>
              </div>
            </div>

            <div className=" max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto">
              {cart.items.map((item, index) => (
                <div
                  key={item.id || index}
                  className="max-w-7xl mx-auto flex justify-between items-center py-4  border-b first:border-t"
                >
                  <div>
                    <div className="flex gap-4">
                      <p className="font-semibold">{item.quantity}x</p>
                      <h3 className="text-gray-900">{item.name}</h3>
                    </div>
                    <p className="text-gray-400 italic">
                      {item.ingredients?.length
                        ? item.ingredients.join(", ")
                        : "No ingredients listed"}
                    </p>
                  </div>
                  <div className="flex gap-10 justify-center items-center">
                    <p>&#8377;{item.unitPrice * item.quantity*10}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] mx-auto mb-4 mt-8 p-2.5 rounded-md bg-gray-100">
              <p>Order Price: &#8377;{cart.totalPrice}</p>
              <p>Platform Charge: &#8377;{Math.floor(cart.totalPrice * 0.03)}</p>
              <p className="font-semibold mt-2 text-lg">
                Total price to pay: &#8377;
                {Math.floor(cart.totalPrice + cart.totalPrice * 0.03)}
              </p>
            </div>
          </div>
        ) : (
            <NoOrders/>
        )}
      </div>
    </>
  );
}

