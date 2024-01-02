import { useDispatch } from "react-redux";
import { allProducts, filterByCategory } from "../redux/slices/CommerceSlice";
function Categories() {
  const dispatch = useDispatch();
  const filter = (id) => {
    dispatch(filterByCategory(id));
  };
  const all = () => {
    dispatch(allProducts());
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <li
        style={{ display: "flex" }}
        id="menu-item-3169"
        className="megamenu full col-5 mobile-thumbnail-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-3169"
      >
        <div className="sub-menu">
          <div className="nm-sub-menu-bridge" />
          <ul style={{ display: "flex" }} className="nm-sub-menu-ul">
            <li
              onClick={() => filter(3)}
              style={{ textAlign: "center", cursor: "pointer" }}
              id="menu-item-3170"
              className="shop-ajax-link shop-redirect-link menu-item menu-item-type-taxonomy menu-item-object-product_cat nm-menu-item-has-image menu-item-3170"
            >
              <img
                src="/wp-content/uploads/2020/08/category-thumb-bags-backpacks.jpg"
                loading="eager"
                alt=""
                width={160}
                height={160}
                className="nm-menu-item-image"
              />{" "}
              <br />
              <span className="nm-menu-item-image-title">
                Bags &amp; Backpacks
              </span>
            </li>
            <li
              onClick={() => filter(4)}
              style={{ textAlign: "center", cursor: "pointer" }}
              id="menu-item-3171"
              className="shop-ajax-link shop-redirect-link menu-item menu-item-type-taxonomy menu-item-object-product_cat nm-menu-item-has-image menu-item-3171"
            >
              <img
                src="/wp-content/uploads/2020/08/category-thumb-decoration.jpg"
                loading="eager"
                alt=""
                width={160}
                height={160}
                className="nm-menu-item-image"
              />{" "}
              <br />
              <span className="nm-menu-item-image-title">Decoration</span>
            </li>
            <li
              onClick={() => filter(5)}
              style={{ textAlign: "center", cursor: "pointer" }}
              id="menu-item-3172"
              className="shop-ajax-link shop-redirect-link menu-item menu-item-type-taxonomy menu-item-object-product_cat nm-menu-item-has-image menu-item-3172"
            >
              <img
                src="/wp-content/uploads/2020/08/category-thumb-essentials.jpg"
                loading="eager"
                alt=""
                width={160}
                height={160}
                className="nm-menu-item-image"
              />{" "}
              <br />
              <span className="nm-menu-item-image-title">Essentials</span>
            </li>
            <li
              onClick={() => filter(6)}
              style={{ textAlign: "center", cursor: "pointer" }}
              id="menu-item-3173"
              className="shop-ajax-link shop-redirect-link menu-item menu-item-type-taxonomy menu-item-object-product_cat nm-menu-item-has-image menu-item-3173"
            >
              <img
                src="/wp-content/uploads/2020/08/category-thumb-interior.jpg"
                loading="eager"
                alt=""
                width={160}
                height={160}
                className="nm-menu-item-image"
              />{" "}
              <br />
              <span className="nm-menu-item-image-title">Interior</span>
            </li>
            <li
              onClick={all}
              style={{ textAlign: "center", cursor: "pointer" }}
              id="menu-item-3174"
              className="shop-ajax-link menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item current_page_item nm-menu-item-has-image menu-item-3174"
            >
              <img
                src="/wp-content/uploads/2020/08/category-thumb-all.jpg"
                loading="eager"
                alt=""
                width={160}
                height={160}
                className="nm-menu-item-image"
              />{" "}
              <br />
              <span className="nm-menu-item-image-title">Shop All</span>
            </li>
          </ul>
        </div>
      </li>
    </div>
  );
}

export default Categories;
