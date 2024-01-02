import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWishlist } from "../../redux/slices/CommerceSlice";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((s) => s.UserSlice.currentUser);
  // const cartCount = useSelector((s) => s.CommerceSlice.cart);
  useEffect(() => {
    if (user) {
      dispatch(getWishlist(user.email));
    }
  }, [user, dispatch]);
  return (
    <div>
      <div id="nm-header-placeholder" className="nm-header-placeholder"></div>
      <header
        id="nm-header"
        className="nm-header centered resize-on-scroll clear"
      >
        <div className="nm-header-inner">
          <div className="nm-row">
            <div className="nm-header-logo">
              <Link to="/">
                <img
                  src="/wp-content/themes/savoy/assets/img/logo2x.png"
                  className="nm-logo"
                  width={232}
                  height={33}
                  alt="Savoy"
                />
                <img
                  src="/wp-content/themes/savoy/assets/img/logo-light2x.png"
                  className="nm-alt-logo"
                  width={232}
                  height={33}
                  alt="Savoy"
                />
              </Link>
            </div>
            <div className="nm-main-menu-wrap col-xs-6">
              <nav className="nm-main-menu">
                <ul id="nm-main-menu-ul" className="nm-menu">
                  <li className="nm-menu-offscreen menu-item-default"></li>
                  <li
                    id="menu-item-20"
                    className="megamenu col-2 shop-link menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children current-menu-item current_page_item menu-item-20"
                  >
                    <Link
                      to="/"
                      style={{ cursor: "pointer" }}
                      aria-current="page"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    id="menu-item-3169"
                    className="megamenu full col-5 mobile-thumbnail-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3169"
                  >
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li
                    id="menu-item-2202"
                    className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-2202"
                  >
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li
                    id="menu-item-271"
                    className="megamenu col-3 menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-271"
                  >
                    {user && <Link to="/orders">Orders</Link>}
                  </li>
                </ul>
              </nav>
            </div>
            <div className="nm-right-menu-wrap col-xs-6">
              <nav className="nm-right-menu">
                <ul id="nm-right-menu-ul" className="nm-menu">
                  <li
                    className="nm-menu-wishlist menu-item-default has-icon"
                    aria-label="Wishlist"
                  >
                    <Link to="/wishlist">
                      <i className="nm-font nm-font-heart-outline" />
                    </Link>
                  </li>
                  <li
                    className="nm-menu-account menu-item-default no-icon"
                    aria-label="My account"
                  >
                    <Link to="/auth">Sign In</Link>
                  </li>
                  <li className="nm-menu-cart menu-item-default no-icon">
                    <Link to="/cart" id="nm-menu-cart-btn">
                      <span className="nm-menu-cart-title">Cart</span>{" "}
                      <span className="nm-menu-cart-count count nm-count-zero"></span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
