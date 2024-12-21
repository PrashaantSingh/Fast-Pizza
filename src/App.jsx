import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderForAll from "./Components/HeaderForAll";
import Menu from "./features/Menu";
import Cart from "./features/Cart";
import "./App.css";
import OrdersPage from "./features/OrdersPage";
import AppLayout from "./Components/AppLayout";
import Login from "./Components/Login";
import UserDetails from "./Components/UserDetails";
import { useEffect, useState } from "react";
function App() {
  const user = useSelector((state) => state.user.name);
    const [pizzaData, setPizzaData] = useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
        // const respone = await fetch(
        //   "https://react-fast-pizza-api.onrender.com/api/menu"
        // );
        const respone = await fetch("data.json");
        const result = await respone.json();
        setPizzaData(result.data);
      };
      fetchData();
    }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <AppLayout pizzaData={pizzaData}/> : <Login />}
          />
          <Route path="/user-details" element={<UserDetails />} />
          <Route
            path="/menu"
            element={
              <Menu pizzaData={pizzaData}>
                <HeaderForAll />
              </Menu>
            }
          />
          <Route
            path="/cart"
            element={
              <Cart>
                <HeaderForAll />
              </Cart>
            }
          />
          <Route
            path="/orders"
            element={
              <OrdersPage>
                <HeaderForAll />
              </OrdersPage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
