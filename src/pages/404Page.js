import React from 'react';

export default function Index() {
  return (
    <div>
      {/* Banner Section */}
      <section id="general_banner" className="banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-left">
              <div className="bread_crumbs">
                <h1>404 Page</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="white-svg">
          <svg
            viewBox="0 0 2880 454.884"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <polygon points="2880,454.884 0,454.884 0,0 1895.16,454.356 2880,311.572" />
          </svg>
        </div>
      </section>

      {/* 404 Page Section */}
      <section className="page_not_found">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="not_found_content text-center">
                <img src="images/404.png" alt="404 Not Found" className="img-fluid" />
                <h1>404 Error</h1>
                <h3>Sorry, The Page Was Not Found</h3>
                <p>
                  The page you were looking for is not here or some other error occurred.{' '}
                  <a href="index.html">Go to Home</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
