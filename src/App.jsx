import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Components/Header";
import Home from "./Components/Home";
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
          {/* <Home/> */}
          <Routes>
            <Route path="/" element={<AppLayout />} />
            <Route
              path="/menu"
              element={
                <Menu>
                  <Header />
                </Menu>
              }
            />
            <Route
              path="/cart"
              element={
                <Cart>
                  <Header />
                </Cart>
              }
            />
            <Route
              path="/orders"
              element={
                <OrdersPage>
                  <Header />
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
