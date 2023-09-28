import React, { useEffect } from "react";
import "./Blog.css";

const Blog = () => {
  // remove the nav element
  const removeMainNav2: any = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");
    if (mainNav2) {
      mainNav2.style.display = "none";
    }
  };

  useEffect(()=>{
    removeMainNav2()
  },[]);

  return (
    <div id="blog">
      <div id="blog-container">
        <h3 id="blog-header">Blog</h3>
        <div id="blog-posts">
          <div className="blog-post">
            <h3 className="blog-post-header">Some header coming hear.</h3>
            <p className="blog-post-date">
              <small>Posted: Sept/25/2023</small>
            </p>
            <p className="blog-post-brief">
              The post brief will come here as well.
            </p>
            <div className="blog-post-data">
              <p className="blog-post-text">
                some text coming here, soo many text please
              </p>
            </div>
          </div>
          <div className="blog-post">
            <h3 className="blog-post-header">Some header coming hear.</h3>
            <p className="blog-post-date">
              <small>Posted: Sept/25/2023</small>
            </p>
            <p className="blog-post-brief">
              The post brief will come here as well.
            </p>
            <div className="blog-post-data">
              <p className="blog-post-text">
                some text coming here, soo many text please
              </p>
            </div>
          </div>
          <div className="blog-post">
            <h3 className="blog-post-header">Some header coming hear.</h3>
            <p className="blog-post-date">
              <small>Posted: Sept/25/2023</small>
            </p>
            <p className="blog-post-brief">
              The post brief will come here as well.
            </p>
            <div className="blog-post-data">
              <p className="blog-post-text">
                some text coming here, soo many text please
              </p>
            </div>
          </div>
        </div>
        <h4 id="blog-post-notice">
          All announcements about <i>Zem_AfroCrafty</i>
        </h4>
      </div>
    </div>
  );
};

export default Blog;
