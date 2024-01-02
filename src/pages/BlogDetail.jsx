import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function BlogDetail() {
  const { id } = useParams();
  const blog = useSelector((s) => s.BlogSlice.blogs).find((i) => i.id == id);
  return (
    <div className="nm-blog layout-list no-sidebar">
      <div className="nm-blog-row nm-row">
        <div className="nm-blog-content-col col-xs-12">
          <div id="nm-blog-list" className="nm-blog-list">
            <div
              id="post-322"
              className="post-322 post type-post status-publish format-standard has-post-thumbnail hentry category-design category-inspiration tag-feature"
            >
              <div className="nm-row">
                <div className="nm-divider-col col-xs-12">
                  <div className="nm-post-divider">&nbsp;</div>
                </div>
                <div className="nm-title-col col-xs-4">
                  <h2 className="nm-post-title">
                    <a>{blog.title}</a>
                  </h2>
                </div>
                <div className="nm-content-col col-xs-8">
                  <div className="nm-post-thumbnail">
                    <a>
                      <img
                        width={701}
                        height={949}
                        src="../wp-content/uploads/2015/07/blog-image-inspiration.jpg"
                        className="attachment- size- wp-post-image"
                        alt=""
                        decoding="async"
                        srcSet="https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration.jpg 701w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-450x609.jpg 450w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-600x812.jpg 600w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-222x300.jpg 222w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-680x921.jpg 680w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-700x948.jpg 700w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-220x298.jpg 220w, https://savoy.nordicmade.com/wp-content/uploads/2015/07/blog-image-inspiration-140x190.jpg 140w"
                        sizes="(max-width: 701px) 100vw, 701px"
                      />
                    </a>
                  </div>
                  <div className="nm-row">
                    <div className="col-lg-4 col-xs-12">
                      <div className="nm-post-meta">
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    <div className="col-lg-8 col-xs-12">
                      <div className="nm-post-content">
                        <div className="nm-post-excerpt">
                          <p>{blog.long_desc}</p>
                        </div>
                      </div>
                    </div>
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

export default BlogDetail;
