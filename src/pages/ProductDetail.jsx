import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToWishlist,
  getWishlist,
  addToCart,
} from "../redux/slices/CommerceSlice";
function ProductDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const wishlist = useSelector((s) => s.CommerceSlice.wishlist);
  const product = useSelector((s) => s.CommerceSlice.products).filter(
    (i) => i.id == id
  )[0];
  const user = useSelector((s) => s.UserSlice.currentUser);
  const addCart = () => {
    dispatch(addToCart(product));
  };
  const i =
    user && wishlist.products
      ? wishlist.products.filter((p) => p.id == product.id)[0]
      : null;
  const favorite = () => {
    if (i) {
      dispatch(
        addToWishlist(wishlist.id, {
          products: wishlist.filter((p) => p.id != product.id),
          email: user.email,
        })
      );
    } else {
      console.log(wishlist);
      dispatch(
        addToWishlist(
          wishlist.id,
          {
            email: user.email,
            products: [product],
          },
          wishlist.id
        )
      );
    }
    dispatch(getWishlist(user.email));
  };

  return (
    <div className="nm-single-product layout-default gallery-col-7 summary-col-5 thumbnails-vertical has-bg-color meta-layout-default tabs-layout-default product type-product post-221 status-publish first instock product_cat-bags-backpacks product_tag-bathroom product_tag-grooming product_tag-leather has-post-thumbnail shipping-taxable purchasable product-type-simple">
      <div className="nm-single-product-bg clear">
        <div className="nm-single-product-top">
          <div className="nm-row">
            <div className="col-xs-9"></div>
            <div className="col-xs-3"></div>
          </div>
        </div>
        <div id="nm-shop-notices-wrap" />
        <div className="nm-single-product-showcase">
          <div className="nm-single-product-summary-row nm-row">
            <div className="nm-single-product-summary-col col-xs-12">
              <div style={{ display: "flex", gap: 30 }}>
                <img
                  width={200}
                  height={300}
                  src={product.image}
                  className="wp-post-image"
                  alt=""
                  title="product-adrian-wash-bag"
                  data-caption=""
                  loading="lazy"
                />
                <img
                  width={200}
                  height={300}
                  src={product.gallery[0]}
                  className=""
                  alt=""
                  title="product-adrian-wash-bag-2"
                  data-caption=""
                />
                <img
                  width={200}
                  height={300}
                  src={product.gallery[1]}
                  className=""
                  alt=""
                  title="product-adrian-wash-bag-2"
                  data-caption=""
                />
              </div>
              <div className="summary entry-summary">
                <div className="nm-product-summary-inner-col nm-product-summary-inner-col-1">
                  <h1 className="product_title entry-title">{product.title}</h1>
                  <p className="price">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol">
                          $
                        </span>
                        {product.price}
                      </bdi>
                    </span>
                  </p>
                </div>
                <div className="nm-product-summary-inner-col nm-product-summary-inner-col-2">
                  <div className="woocommerce-product-details__short-description entry-content">
                    <p>
                      Designed for simplicity and made from high quality
                      materials. Its sleek geometry and material combinations
                      creates a modern personalized look.
                    </p>
                  </div>
                  <div className="cart">
                    <button
                      onClick={addCart}
                      className="nm-simple-add-to-cart-button single_add_to_cart_button button alt"
                    >
                      Add to cart
                    </button>
                  </div>
                  <div className="nm-product-share-wrap has-share-buttons">
                    <div className="nm-product-wishlist-button-wrap">
                      <span onClick={favorite}>
                        {!i && <i className="nm-font nm-font-heart-o" />}
                        {i && <i className="nm-font nm-font-heart" />}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="woocommerce-tabs wc-tabs-wrapper">
        <div className="nm-product-tabs-col">
          <div className="nm-row">
            <div className="col-xs-12">
              <ul className="tabs wc-tabs" role="tablist">
                <li
                  className="description_tab"
                  id="tab-title-description"
                  role="tab"
                  aria-controls="tab-description"
                >
                  <a>Description </a>
                </li>
                <li
                  className="additional_information_tab"
                  id="tab-title-additional_information"
                  role="tab"
                  aria-controls="tab-additional_information"
                >
                  <a>Additional information </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel wc-tab"
            id="tab-description"
            role="tabpanel"
            aria-labelledby="tab-title-description"
          >
            <div className="nm-row">
              <div className="col-xs-12">
                <div className="nm-tabs-panel-inner entry-content">
                  <p>
                    Authentic keffiyeh master cleanse. Fingerstache semiotics
                    PBR quinoa. Pop-up Godard kale chips, trust fund Neutra
                    fingerstache paleo Wes Anderson. Deep v single-origin coffee
                    cred Thundercats beard. Mumblecore before they sold out roof
                    party biodiesel. Banksy swag Portland readymade synth
                    messenger bag cliche.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel wc-tab"
            id="tab-additional_information"
            role="tabpanel"
            aria-labelledby="tab-title-additional_information"
          >
            <div className="nm-row">
              <div className="col-xs-12">
                <div className="nm-tabs-panel-inner">
                  <div className="nm-additional-information-inner">
                    <table className="woocommerce-product-attributes shop_attributes">
                      <tbody>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_weight">
                          <th className="woocommerce-product-attributes-item__label">
                            Weight
                          </th>
                          <td className="woocommerce-product-attributes-item__value">
                            <p>1.73 kg</p>
                          </td>
                        </tr>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_dimensions">
                          <th className="woocommerce-product-attributes-item__label">
                            Dimensions
                          </th>
                          <td className="woocommerce-product-attributes-item__value">
                            <p>100 x 37 x 100 cm</p>
                          </td>
                        </tr>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_materials">
                          <th className="woocommerce-product-attributes-item__label">
                            Materials
                          </th>
                          <td className="woocommerce-product-attributes-item__value">
                            <p>80% cotton, 20% linen</p>
                          </td>
                        </tr>
                        <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--attribute_pa_other-info">
                          <th className="woocommerce-product-attributes-item__label">
                            Other Info
                          </th>
                          <td className="woocommerce-product-attributes-item__value">
                            <p>
                              American heirloom jean shorts pug seitan
                              letterpress.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
