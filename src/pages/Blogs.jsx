import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogsAsync } from "../redux/slices/BlogSlice";
import { Link } from "react-router-dom";

function Blogs() {
  const dispatch = useDispatch();
  const blogs = useSelector((s) => s.BlogSlice.blogs);
  useEffect(() => {
    dispatch(getBlogsAsync());
  }, [dispatch]);
  return (
    <div className="nm-blog-wrap">
      <div className="nm-blog-categories">
        <div className="nm-row">
          <div className="col-xs-12"></div>
        </div>
      </div>
      <div className="nm-blog layout-grid no-sidebar">
        <div className="nm-blog-row nm-row">
          <div className="nm-blog-content-col col-xs-12">
            <div className="nm-blog-grid">
              <ul
                id="nm-blog-list"
                className="xsmall-block-grid-1 small-block-grid-1 medium-block-grid-2 large-block-grid-3"
              >
                {blogs &&
                  blogs.map((i) => (
                    <li
                      key={i.id}
                      id="post-310"
                      className="post-310 post type-post status-publish format-standard has-post-thumbnail hentry category-inspiration category-products tag-feature"
                    >
                      <div className="nm-post-thumbnail">
                        <Link to={`/blogs/${i.id}`}>
                          <img
                            width={701}
                            height={949}
                            src="../../../wp-content/uploads/2015/07/blog-image-lantern.jpg"
                            className="attachment- size- wp-post-image"
                            alt=""
                            decoding="async"
                            srcSet="https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern.jpg 701w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-450x609.jpg 450w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-600x812.jpg 600w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-222x300.jpg 222w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-680x921.jpg 680w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-700x948.jpg 700w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-220x298.jpg 220w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-lantern-140x190.jpg 140w"
                            sizes="(max-width: 701px) 100vw, 701px"
                          />
                          <div className="nm-image-overlay" />
                        </Link>
                      </div>
                      <div className="nm-post-meta">
                        <span>{i.date}</span>
                      </div>
                      <h2 className="nm-post-title">
                        <Link to={`/blogs/${i.id}`}>{i.title}</Link>
                      </h2>
                      <div className="nm-post-content">
                        <div className="nm-post-excerpt">
                          <p>{i.short_desc}</p>
                          <Link
                            to={`/blogs/${i.id}`}
                            className="nm-post-read-more"
                          >
                            <span>More</span>
                            <i className="nm-font nm-font-angle-thin-right" />
                          </Link>
                        </div>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
