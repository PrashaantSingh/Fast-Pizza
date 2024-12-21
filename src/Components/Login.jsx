import { useDispatch } from "react-redux";
import HeaderForHome from "./HeaderForHome";
import { setName } from "../redux/reducers/slices/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setNameInput] = useState("");
  return (
    <div className="relative bg-cover bg-center bg-no-repeat custom-bg h-[100vh] font-poppins">
      <div className="absolute inset-0 bg-black bg-opacity-50 ">
        <HeaderForHome />
        <div className="sm:text-center text-white flex items-start sm:items-center  flex-col justify-center gap-4 md:gap-8 lg:gap-12  max-w-[90%] mx-auto h-[80vh]">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white md:max-w-[90%]">
            Who do we have the pleasure of serving today?
          </h1>
          <form
            className="flex sm:gap-5 gap-4 flex-col justify-center items-start sm:items-center sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(setName(name.trim().toUpperCase())), navigate("/");
            }}
          >
            <input
              className="px-5 py-2 rounded-full border-none outline-none text-orange-950"
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => {
                setNameInput(e.target.value);
              }}
            />
            <button className="bg-orange-500 px-5 py-2 rounded-full">
              Get Started
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
