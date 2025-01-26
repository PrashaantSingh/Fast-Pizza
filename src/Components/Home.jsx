
import { Link } from "react-router-dom";
import HeaderForHome from "./HeaderForHome";

export default function Home() {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat custom-bg h-[100vh]">
      <div className="absolute inset-0 bg-black bg-opacity-50">
        <HeaderForHome />
        <div className="text-center bg-transparent mx-auto py-52 font-poppins px-4">
          <div className="px-1">
            <h1 className="lg:text-7xl sm:text-5xl md:text-6xl text-4xl text-white font-bold md:max-w-[80%] mx-auto text-left sm:text-center">
              Delivering Happiness One Slice at a Time!
            </h1>
            <p className="text-white mt-4 md:max-w-[60%] sm:mx-auto text-left sm:text-center max-w-[90%]">
              Pizza made to perfection, delivered right to your door for maximum
              flavor!
            </p>
            <div className="flex justify-start sm:justify-center mt-6">
              <Link
                className="bg-orange-500 p-3 rounded-full text-white text-sm"
                to="/menu"
              >
                Start Ordering
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
