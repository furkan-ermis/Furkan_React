import { useDispatch } from "react-redux";
import { search } from "../redux/slices/CommerceSlice";
function Search() {
  const dispatch = useDispatch();
  const handle = (e) => {
    dispatch(search(e.toString()));
  };

  return (
    <div style={{ marginBottom: 40 }}>
      <div id="nm-shop-search-notice">
        <span>
          press <u>Enter</u> to search
        </span>
      </div>
      <div className="nm-row">
        <div className="col-xs-12">
          <div className="nm-shop-search-inner">
            <div className="nm-shop-search-input-wrap">
              <a onClick={() => handle("")} id="nm-shop-search-close">
                <i className="nm-font nm-font-close2" />
              </a>
              <div>
                <input
                  type="text"
                  id="nm-shop-search-input"
                  autoComplete="off"
                  name="s"
                  placeholder="Search products"
                  onChange={(e) => handle(e.target.value)}
                />
                <input type="hidden" name="post_type" defaultValue="product" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
