import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
function App() {
  return (
    <div className="nm-page-overflow">
      <div className="nm-page-wrap">
        <div className="nm-page-wrap-inner">
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/blogs" element={<Blogs />}></Route>
            <Route path="/blogs/:id" element={<BlogDetail />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/contact"></Route>
            <Route path="/auth" element={<Auth />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
            <Route path="/products/:id" element={<ProductDetail />}></Route>
            <Route path="/wishlist"></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
