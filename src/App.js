import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductsDetails from "./components/ProductsDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<ProductsDetails />} />
          <Route>404 Page Not Found</Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
