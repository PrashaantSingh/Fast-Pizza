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
function App() {
  const user = useSelector((state) => state.user.name);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={user ? <AppLayout /> : <Login />}
          />
          <Route path="/user-details" element={<UserDetails />} />
          <Route
            path="/menu"
            element={
              <Menu>
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
