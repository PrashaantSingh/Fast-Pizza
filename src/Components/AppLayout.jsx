import Home from "./Home";
import Menu from "../features/Menu";
import Footer from "./Footer";


export default function AppLayout({pizzaData}) {
  return (
      <>
          <Home />
          <Menu pizzaData={pizzaData}/>
          <Footer/>
      </>
  )
}
