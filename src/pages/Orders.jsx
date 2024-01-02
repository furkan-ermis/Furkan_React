import "./Orders.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrdersAsync } from "../redux/slices/CommerceSlice";
function Orders() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.UserSlice.currentUser);
  useEffect(() => {
    dispatch(getOrdersAsync(user.id));
  }, [dispatch, user]);
  const orders = useSelector((s) => s.CommerceSlice.orders);
  return (
    <div>
      {orders &&
        orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3 className="order-header">Order #{order.id}</h3>
            {order.products.map((item) => (
              <div key={item.product.id} className="order-item">
                <img
                  src={item.product.image}
                  alt={item.product.title}
                  className="item-image"
                />
                <div className="item-details">
                  <span className="item-name">{item.product.title}</span> <br />
                  <span className="item-quantity">
                    Quantity: {item.quantity}
                  </span>{" "}
                  <br />
                  <span className="item-price">
                    Price: {item.product.price} $
                  </span>{" "}
                  <br />
                  <span className="item-price">
                    Total Price: {item.product.price * item.quantity} $
                  </span>
                </div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Orders;
