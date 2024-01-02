import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="nm-footer" className="nm-footer">
      <div className="nm-footer-bar layout-default">
        <div className="nm-footer-bar-inner">
          <div className="nm-row">
            <div className="nm-footer-bar-left col-md-8 col-xs-12">
              <ul id="nm-footer-bar-menu" className="menu">
                <li
                  id="menu-item-386"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-386"
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  id="menu-item-388"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-388"
                >
                  <Link to="/bogs">Blog</Link>
                </li>

                <li
                  id="menu-item-387"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-387"
                >
                  <Link to="/orders">Order Tracking</Link>
                </li>
                <li
                  id="menu-item-385"
                  className="menu-item menu-item-type-post_type menu-item-object-page menu-item-385"
                >
                  <Link to="/contact">Contact</Link>
                </li>
                <li className="nm-menu-item-copyright menu-item">
                  <span>
                    © By <a href="https://1.envato.market/xaNrR">NordicMade</a>
                  </span>
                </li>
              </ul>
            </div>
            <div className="nm-footer-bar-right col-md-4 col-xs-12">
              <ul className="nm-footer-bar-social"></ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
