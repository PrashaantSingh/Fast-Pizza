import { NavLink } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
export default function Header() {
  return (
    <div className="flex justify-between px-4 py-2  sm:px-8 sm:py-2 bg-orange-500 border-orange-500 border-b">
      <NavLink to="/" className="text-2xl text-white">
        Fast Pizza
      </NavLink>
      <div className="flex gap-8 items-center">
        <nav className="flex gap-8">
          <NavLink className="text-[1.2rem]" to="/cart">
            <TiShoppingCart className="text-2xl text-white" />
          </NavLink>
        </nav>
        <div className="uppercase hidden sm:block md:block lg:block">User</div>
      </div>
    </div>
  );
}