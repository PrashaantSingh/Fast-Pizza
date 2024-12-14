import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import HeaderForAll from "./Components/HeaderForAll";
import Menu from "./features/Menu";
import Cart from "./features/Cart";
import "./App.css";
import store from "./redux/store";
import OrdersPage from "./features/OrdersPage";
import AppLayout from "./Components/AppLayout";
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<AppLayout />} />
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
      </Provider>
    </>
  );
}

export default App;
