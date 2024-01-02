import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../redux/slices/CommerceSlice";
function Products() {
  const dispatch = useDispatch();
  const products = useSelector((s) => s.CommerceSlice.filteredProducts);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div id="nm-shop-products" className="nm-shop-products">
      <div className="nm-row">
        <div className="nm-shop-products-col col-xs-12">
          <div id="nm-shop-products-overlay" className="nm-loader" />
          <div id="nm-shop-browse-wrap" className="nm-shop-description-clean">
            <div className="woocommerce-notices-wrapper" />
            <ul className="nm-products products xsmall-block-grid-2 small-block-grid-2 medium-block-grid-3 large-block-grid-4 grid-default layout-default attributes-position-thumbnail has-action-links">
              {products &&
                products.map((i) => (
                  <li
                    key={i.id}
                    className="nm-has-attributes product type-product post-238 status-publish last instock product_cat-bags-backpacks product_tag-contemporary product_tag-travel has-post-thumbnail shipping-taxable purchasable product-type-variable has-default-attributes"
                    data-product-id={i.id}
                  >
                    <div className="nm-shop-loop-product-wrap">
                      <div
                        className="nm-shop-loop-thumbnail"
                        style={{ width: 300, height: 400 }}
                      >
                        <Link
                          to={`/products/${i.id}`}
                          className="nm-shop-loop-thumbnail-link woocommerce-LoopProduct-link"
                        >
                          <img
                            style={{ objectFit: "contain" }}
                            src={i.image}
                            alt=""
                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image  lazyload"
                          />
                        </Link>
                      </div>
                      <div className="nm-shop-loop-details">
                        <div className="nm-shop-loop-title-price">
                          <h3 className="woocommerce-loop-product__title">
                            <Link
                              to={`/products/${i.id}`}
                              className="nm-shop-loop-title-link woocommerce-LoopProduct-link"
                            >
                              {i.title}
                            </Link>
                          </h3>
                          <span className="price">
                            <span className="woocommerce-Price-amount amount">
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">
                                  $
                                </span>
                                {i.price}
                              </bdi>
                            </span>
                          </span>
                        </div>
                        <div className="nm-shop-loop-actions">
                          <Link
                            to={`/products/${i.id}`}
                            className="nm-quickview-btn"
                          >
                            Show more
                          </Link>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
