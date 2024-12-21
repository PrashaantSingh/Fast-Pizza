import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


export default function HeaderForHome() {
  const user = useSelector(store => store.user);
  return (
    <div className="flex justify-between px-4 py-2  sm:px-8 sm:py-2 text-white">
    <NavLink to="/" className="text-2xl text-semibold text-orange-500">
      Fast Pizza
    </NavLink>
    <div className="flex gap-8 items-center">
      {user.name!=="" ?(<nav className="flex gap-8">
        <NavLink className="text-[1.2rem]" to="/cart">
          <TiShoppingCart className="text-2xl text-white" />
        </NavLink>
      </nav>):""}
        <div className="uppercase hidden sm:block">{user.name.split(" ")[0] || "Login"} </div>
    </div>
  </div>
  )
}
