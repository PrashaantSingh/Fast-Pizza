import { Link } from "react-router-dom";
import Header from "./HeaderForAll";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function UserDetails() {
  const user = useSelector(state => state.user);
  const [nameInp, setNameInp] = useState(user.name)
  const [phoneInp, setPhoneInp] = useState("")
  const [addressInp,setAddressInp]=useState("")
  return (
    <div className="h-screen bg-orange-50 text-orange-950">
      <Header />

      <div className="flex flex-col items-center justify-center gap-8 mt-8 h-[80vh]">
        <h2 className="text-3xl font-semibold ">Details</h2>
        <form className="flex flex-col gap-8 mx-auto max-w-[95%] sm:w-[60%] border-solid items-center">
          <div className="flex items-center gap-4">
            <label className="w-16" htmlFor="name">
              Name:{" "}
            </label>
            <input
              className="px-6 py-2 rounded-full text-orange-950 outline-none"
              type="text"
              required
              placeholder="Enter your name"
              id="name"
              onChange={e=>setNameInp(e.target.value)}
              value={nameInp}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-16" htmlFor="phone">
              Phone:{" "}
            </label>
            <input
              className="px-6 py-2 rounded-full text-orange-950 outline-none"
              type="tel"
              required
              placeholder="Enter your phone"
              id="phone"
              onChange={e => setPhoneInp(e.target.value)}
              value={phoneInp}
            />
          </div>
          <div className="flex items-center gap-4">
            <label className="w-16" htmlFor="address">
              Address:{" "}
            </label>
            <input
              className="px-6 py-2 rounded-full text-orange-950 outline-none"
              type="text"
              placeholder="Enter your address"
              id="address" required
              onChange={e => setAddressInp(e.target.value)}
              value={addressInp}
            />
          </div>
          <div className="flex justify-center items-center">
            <Link className="bg-orange-500 text-white rounded-full px-5 py-2 mt-2" to="/orders">
              Confirm Order
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
