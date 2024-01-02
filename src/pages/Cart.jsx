import { useSelector, useDispatch } from "react-redux";
import {
  removeToCart,
  addOrderAsync,
  removeAllCart,
} from "../redux/slices/CommerceSlice";
import "./CartComponent.css";

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((s) => s.CommerceSlice.cart);
  const user = useSelector((s) => s.UserSlice.currentUser);
  const handleRemoveItem = (productId) => {
    dispatch(removeToCart(productId));
  };

  const handlePurchase = () => {
    if (user) {
      dispatch(addOrderAsync({ user_id: user.id, products: cart }));
      dispatch(removeAllCart());
    }
  };
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <div className="cart-container">
        <h2 className="cart-header">Cart</h2>
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.product.id} className="cart-item">
              <img
                src={item.product.image}
                alt={item.name}
                className="item-image"
              />
              <div className="item-details">
                <span className="item-name">{item.product.title}</span> <br />
                <span className="item-name">{item.quantity}x</span> <br />
                <span className="item-price">{item.product.price} $</span>{" "}
                <br />
                <span className="item-price">
                  Total: {item.product.price * item.quantity} $
                </span>
                <div className="item-buttons">
                  <button onClick={() => handleRemoveItem(item.product.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <button className="purchase-button" onClick={handlePurchase}>
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Cart;
