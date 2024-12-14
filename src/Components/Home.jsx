import { TiShoppingCart } from "react-icons/ti";
import { Link, NavLink } from "react-router-dom";
import HeaderForHome from "./HeaderForHome";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] h-[100vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <HeaderForHome/>
        <div className="text-center bg-transparent mx-auto py-52">
          <div className="px-1">
            <h1 className="text-4xl sm:text-5xl text-white font-bold ">
              Delivering Happiness One Slice at a Time!
            </h1>
            <p className="text-white mt-4">
              Pizza made to perfection, delivered right to your door for maximum
              flavor!
            </p>
            <Link
              className="bg-orange-500 p-3 rounded-full inline-block mt-6 text-white text-sm"
              to="/menu"
            >
              Start Ordering
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
