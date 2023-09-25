import React from "react";
import "./Blog.css";

const Blog = () => {
  // Remove the main nav 2 element from the document
  const hideMainNav2 = () => {
    // get element by id
    const mainNav2: any = document.getElementById("main-nav-2");

    // change display to none
    mainNav2.style.display = "none";
  };

  // prevent reload of page
  const handleReload = (e: any) =>{
    e.preventDefault();
  };

  // call the function for the effect
  hideMainNav2();

  return (
    <div id="blog" onLoad={handleReload}>
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
