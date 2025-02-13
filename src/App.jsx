import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Cart from "./pages/cart";
import Home from "./pages/home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
